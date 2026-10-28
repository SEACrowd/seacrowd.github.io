# frozen_string_literal: true

# jekyll-scholar renders every entry through CiteProc (APA) to fill the
# `reference` Liquid variable, even when the bibliography template never reads
# it. _layouts/bib.html builds the card from `entry.*` fields only, so that work
# is wasted and dominates build time as the .bib files grow (~2.3x on 3000
# entries). Skip it unless the active template mentions `reference`.
#
# Written against jekyll-scholar 7.2.0 (see Gemfile.lock); re-check
# Utilities#reference_data when upgrading.
module Jekyll
  class Scholar
    module Utilities
      alias_method :reference_data_with_citeproc, :reference_data

      def reference_data(entry, index = nil)
        return reference_data_with_citeproc(entry, index) if template_uses_reference?

        {
          'entry' => liquidify(entry),
          'reference' => '',
          'key' => entry.key,
          'type' => entry.type.to_s,
          'link' => repository_link_for(entry),
          'links' => repository_links_for(entry)
        }
      end

      private

      def template_uses_reference?
        template = bibliography_template
        return true if template.nil? || template.empty?

        source = site.layouts.key?(template) ? site.layouts[template].content : template
        source.match?(/\breference\b/)
      end
    end
  end
end
