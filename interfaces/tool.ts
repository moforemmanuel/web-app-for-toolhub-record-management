
interface ITool {
  name: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  url: string;
  authors: string[];
  category: "Category 1"|"Category 2"|"Category 3";
  tool_type: "web app"|"desktop app"|"bot"|"gadget"|"user script"|"command line tool"|"coding framework"|"lua module"|"template"|"other";
  license?: string;
  source_repository?: string;
  bug_tracker_url?: string;
  user_docs_url?: string;


}

export type { ITool };

