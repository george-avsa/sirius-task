import { createSlice } from "@reduxjs/toolkit";
import { Lesson } from "Entities/Lesson/store/lesson.store";
import { getScheduleDays } from "../lib/getScheduleDays";

export type ScheduleDay = {
    date: string,
    isAnotherMonth: boolean,
    isPast: boolean,
    lessons: Lesson[],
}

const initialState: ScheduleDay[] = [];

const scheduleSlice = createSlice({
    name: 'schedule', 
    initialState,
    reducers: {
        generateGrid(state, action) {
            const {payload} = action;
            return getScheduleDays(payload.date, payload.lessons);
        }
    }
});

export const {generateGrid} = scheduleSlice.actions;
export const scheduleReducer = scheduleSlice.reducer;