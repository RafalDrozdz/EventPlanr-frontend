import { format } from "date-fns";
import { FULL_DATE_FORMAT } from "~/constants";

export const ISODateToDDMMYYYYHHMM = (date: string) =>
  date && format(new Date(date), FULL_DATE_FORMAT);
