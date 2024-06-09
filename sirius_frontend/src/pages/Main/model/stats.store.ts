import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosWithAuth } from "App/api/interceptors";
import { RootState } from "App/store/store";
import { Lesson } from "Entities/Lesson/store/lesson.store";

type LessonWithTeacher = Lesson & {teacherName: string}

type StatsSlice = {
    lessons: LessonWithTeacher[],
    stats: {
        [key: string]: number;
    },
}

const initialState: StatsSlice = {
    lessons: [],
    stats: {},
}

export const getStatsByStudentId = createAsyncThunk<StatsSlice, void, {state: RootState}>(
    'stats/getStatsByStudentId',
    async (_, {getState}) => {
        const activeStudent = getState().student.activeStudent;
        const response = await axiosWithAuth.get<StatsSlice>(`http://localhost:4200/api/lesson/stats/main/${activeStudent}`);
        return response.data;
    }   
)

const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getStatsByStudentId.fulfilled, (state, action) => {
                return {...action.payload, lessons: action.payload.lessons.slice(0, 3)};
            })
    }
})

export const statsReducer = statsSlice.reducer;