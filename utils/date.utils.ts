import { format, type Locale } from "date-fns";
import { FULL_DATE_FORMAT, TEXT_DATE_FORMAT } from "~/constants";
import { pl, enGB } from "date-fns/esm/locale";

export const ISODateToDDMMYYYYHHMM = (date: string) =>
  date && format(new Date(date), FULL_DATE_FORMAT);

export const ISODateToText = (date: string, localeValue: string) => {
  const locale = localeValue === "pl" ? pl : enGB;
  return date && format(new Date(date), TEXT_DATE_FORMAT, { locale });
};
