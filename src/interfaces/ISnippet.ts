export interface ISnippet {
  body: string[];
  description: string;
  prefix: string;
  functionType: "arrow" | "function" | "both";
}
