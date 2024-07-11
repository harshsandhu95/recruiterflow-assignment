export type Multimedia = {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
};

export type Article = {
  slug_name: string;
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  uri: string;
  url: string;
  byline: string;
  item_type: string;
  source: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  first_published_date: string;
  material_type_facet: string;
  kicker: string;
  subheadline: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  related_urls: string[];
  multimedia: Multimedia[];
};
