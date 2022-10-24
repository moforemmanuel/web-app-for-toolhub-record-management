


interface IToolInfo {
  // see https://meta.wikimedia.org/wiki/Toolhub/Data_model
  // Basic Info
  Name: string;
  Title: string;
  Description: string;
  URL: string;
  URL_alternates?: string[];
  Author?: string;
  Official_maintainer?: string[];
  Sponsor?: string;
  Subtitle?: string;
  Bot_username?: string;
  Tool_type?: string;
  Wikidata_item?: string;
  OpenHub_ID?: string;

  // when and where to use the tool
  For_wikis?: string[];
  Use_cases?: string[];
  Audiences?: string[];
  Related_topics?: string[];
  Collections?: string[];
  Supported_languages?: string[];
  Feedback_URL?: string;
  Broken?: boolean;
  Experimental?: boolean;
  Deprecated?: boolean;
  Replaced_by?: string;

  // Tool use guidance
  Documentation_URL?: string;
  Screenshots: string[];
  Video: string[];
  Privacy_policy_url?: string;
  additional_information?: string;

  // For developers
  license?: string;
  repository?: string;
  technologies_used?: string;
  api_url?: string;
  developer_documenttion_url?: string;
  bug_tracker_url?: string;

  // Volunteering
  volunteer?: string[];
  code_maintainer?: string[];
  testers?: string[];
  translate_url?: string[]
}





export type { IToolInfo }