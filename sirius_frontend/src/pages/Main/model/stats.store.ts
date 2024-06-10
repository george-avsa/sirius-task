import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosWithAuth } from "App/api/interceptors";
import { RootState } from "App/store/store";
import { Lesson } from "Entities/Lesson/store/lesson.store";

type LessonWithTeacher = Lesson & {teacherName: string}

type StatsSlice = {
    isLoading: boolean,
    lessons: LessonWithTeacher[],
    stats: {
        [key: string]: number;
    },
}

const initialState: StatsSlice = {
    isLoading: true,
    lessons: [],
    stats: {},
}

export const getStatsByStudentId = createAsyncThunk<StatsSlice, void, {state: RootState}>(
    'stats/getStatsByStudentId',
    async (_, {getState}) => {
        const activeStudent = getState().student.activeStudent;
        const response = await axiosWithAuth.get<StatsSlice>(`http://3073383-ca55064.twc1.net:90/api/lesson/stats/main/${activeStudent}`);
        return response.data;
    }   
)

const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        setIsLoadingStats(state) {
            return {...state, isLoading: true};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getStatsByStudentId.fulfilled, (state, action) => {
                return {
                    ...action.payload, 
                    // данные отсортированы на бекенде
                    lessons: action.payload.lessons.slice(0, 3),
                    isLoading: false,
                };
            })
    }
})

export const {setIsLoadingStats} = statsSlice.actions;
export const statsReducer = statsSlice.reducer;