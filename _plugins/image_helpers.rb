# frozen_string_literal: true

# Image helpers for performance and social previews.
#
# 1. `image_size` Liquid filter: reads the pixel size of a local PNG/JPEG/GIF
#    straight from its header, so layouts can emit accurate og:image:width/height
#    and skip images that are too small for link previews.
#
#      {% assign dims = 'assets/images/banner.png' | image_size %}  # => [1200, 630] or nil
#
# 2. A post-render hook that adds `loading="lazy" decoding="async"` to every
#    <img> that does not already set `loading`. Above-the-fold images opt out
#    with `loading="eager"` in their markup.
module Jekyll
  module ImageHelpers
    SIZE_CACHE = {}

    def image_size(path)
      return nil if path.nil? || path.to_s.empty?

      site = @context.registers[:site]
      rel = path.to_s.sub(%r{\A/}, '').sub(/\?.*\z/, '')
      full = File.join(site.source, rel)
      key = [full, File.exist?(full) ? File.mtime(full).to_i : 0]
      SIZE_CACHE[key] ||= read_size(full)
    end

    private

    def read_size(file)
      return nil unless File.file?(file)

      File.open(file, 'rb') do |f|
        head = f.read(26)
        return nil if head.nil?

        if head.start_with?("\x89PNG\r\n\x1a\n".b)
          return head[16, 8].unpack('N2')
        elsif head.start_with?('GIF8')
          return head[6, 4].unpack('v2')
        elsif head.start_with?("\xFF\xD8".b)
          return jpeg_size(f)
        end
      end
      nil
    end

    def jpeg_size(io)
      io.rewind
      io.read(2)
      loop do
        byte = io.read(1)
        return nil if byte.nil?
        next unless byte.ord == 0xFF

        marker = io.read(1)
        return nil if marker.nil?

        code = marker.ord
        next if code == 0xFF || code.zero? || (0xD0..0xD9).cover?(code)

        len = io.read(2)&.unpack1('n')
        return nil if len.nil?

        if (0xC0..0xCF).cover?(code) && ![0xC4, 0xC8, 0xCC].include?(code)
          data = io.read(5)
          return nil if data.nil?

          height, width = data[1, 4].unpack('n2')
          return [width, height]
        end
        io.seek(len - 2, IO::SEEK_CUR)
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::ImageHelpers)

Jekyll::Hooks.register %i[pages documents], :post_render do |doc|
  next unless doc.output_ext == '.html'

  doc.output = doc.output.gsub(/<img\b([^>]*)>/i) do |tag|
    attrs = Regexp.last_match(1)
    next tag if attrs =~ /\sloading\s*=/i

    attrs = attrs.sub(%r{\s*/\z}, '')
    extra = +' loading="lazy"'
    extra << ' decoding="async"' unless attrs =~ /\sdecoding\s*=/i
    "<img#{attrs}#{extra}>"
  end
end
