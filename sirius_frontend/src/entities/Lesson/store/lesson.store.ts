import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosWithAuth } from "App/api/interceptors";
import { RootState } from "App/store/store";

export type Lesson = {
    id: string,
    name: string,
    startsAt: string,
    endsAt: string,
    meetingLink: string,
    groupId: string,
    teacherId: string,
}

type LessonSlice = {
    isLoading: boolean,
    date: string,
    lessons: Lesson[],
} 

const initialState: LessonSlice = {
    isLoading: true,
    date: new Date(2024, 5, 1).toISOString(),
    lessons: [],
}

export const fetchLessonByMonth = createAsyncThunk<Lesson[], string, {state: RootState }>(
    'lessons/fetchByMonth',
    async (studentId, {getState}) => {
        const {lesson} = getState();
        const response = await axiosWithAuth.get<Lesson[]>(`http://3073383-ca55064.twc1.net:90/api/lesson/${studentId}/${lesson.date}`);
        
        return response.data;
    },
)

const lessonSlice = createSlice({
    name: 'lessons',
    initialState,
    reducers: {
        incrementDate(state) {
            const prevDate = new Date(state.date);
            const date = new Date(prevDate.getFullYear(), prevDate.getMonth()+1, 1);
            return {
                ...state,
                isLoading: true,
                date: date.toISOString(),
            }
        },
        decrementDate(state) {
            const prevDate = new Date(state.date);
            const date = new Date(prevDate.getFullYear(), prevDate.getMonth()-1, 1);
            return {
                ...state,
                isLoading: true,
                date: date.toISOString(),
            }
        },
        setTodayDate(state) {
            const now = new Date();
            const nowDate = new Date(now.getFullYear(), now.getMonth(), 1);
            const prevDate = new Date(state.date);
            return {
                ...state,
                isLoading: nowDate.toISOString() !== prevDate.toISOString(),
                date: nowDate.toISOString(),
            }
        },
        setIsLoadingLessons(state) {
            return {
                ...state,
                isLoading:true,
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLessonByMonth.fulfilled, (state, {payload}) => {
                return {
                    ...state,
                    isLoading: false,
                    lessons: [...payload],
                }
            })
    }
})


export const {decrementDate, incrementDate, setTodayDate, setIsLoadingLessons} = lessonSlice.actions;
export const lessonReducer = lessonSlice.reducer;