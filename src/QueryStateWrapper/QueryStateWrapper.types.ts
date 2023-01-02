import { UseQueryResult } from "@tanstack/react-query";
import { UseInfiniteQueryResult } from "@tanstack/react-query/build/lib/types";

// Generated with util/create-component.js
export interface QueryStateWrapperProps {
  children: React.ReactNode;
  loader?: React.ReactNode;
  length?:number;
  query?: | UseQueryResult<unknown, unknown> | UseInfiniteQueryResult<unknown, unknown>;
}
