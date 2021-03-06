export interface ChartOptions {
  metrics: Metric[];
  dimensions: Dimension[];
  chart: Chart;
  colors: string[];
  height: number;
  lineType: LineType;
  areaType: AreaType;
  selectedDimensions: string[];
  selectedMetrics: Metric[];
  pieceType: PieceType;
  summaryType: SummaryType;
  networkType: NetworkType;
  hierarchyType: HierarchyType;
  primaryKey: string[];
  setColor: (color: string) => void;
}

export interface DataProps {
  schema: Schema;
  data: Datapoint[];
  options: ChartOptions;
}

export interface Schema {
  fields: Field[];
  pandas_version: string;
  primaryKey: string[];
}
export interface Field {
  name: string;
  type: string;
}

export interface Metric extends Field {
  type: "integer" | "datetime" | "number";
}

export interface Dimension extends Field {
  type: "string" | "boolean" | "datetime";
}

export interface Datapoint {
  [fieldName: string]: any;
}

export interface LineCoordinate {
  value: number;
  x: number;
  label: string;
  color: string;
  originalData: Datapoint;
}

export interface LineData {
  color: string;
  label: string;
  type: "number" | "integer" | "datetime";
  coordinates: LineCoordinate[];
}

export interface Chart {
  metric1: string;
  metric2: string;
  metric3: string;
  dim1: string;
  dim2: string;
  dim3: string;
  networkLabel: string;
  timeseriesSort: string;
}
export type LineType = "line" | "stackedarea" | "bumparea" | "stackedpercent";
export type AreaType = "hexbin" | "heatmap" | "contour";

export type SummaryType =
  | "violin"
  | "joy"
  | "histogram"
  | "heatmap"
  | "boxplot";
export type PieceType = "bar" | "point" | "swarm" | "clusterbar";
export type HierarchyType = "dendrogram" | "treemap" | "partition" | "sunburst";

export type NetworkType = "force" | "sankey" | "arc" | "matrix";
export type View =
  | "line"
  | "bar"
  | "scatter"
  | "grid"
  | "network"
  | "summary"
  | "hexbin"
  | "parallel"
  | "hierarchy";
