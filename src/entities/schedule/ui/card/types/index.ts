import { IWithStyle } from "types";

export interface IScheduleCard extends IWithStyle {
  schedule: {
    title: string;
    time: string;
  };
}
