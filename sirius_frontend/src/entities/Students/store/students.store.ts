import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosWithAuth } from "App/api/interceptors";
import { RootState } from "App/store/store";

type Student = {
    id: string,
    name: string,
    surname: string,
    avatar: string,
}

type StudentSlice = {
    students: Student[],
    activeStudent: string,
}

const initialState: StudentSlice = {
    students: [],
    activeStudent: '',
};

export const fetchStudents = createAsyncThunk<Student[], string, {state: RootState }>(
    'students/fetchByUserId',
    async (userId) => {
        const response = await axiosWithAuth.get<Student[]>(`http://3073383-ca55064.twc1.net:90/api/student/${userId}`);
        return response.data;
    },
)

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        setActiveUser(state, {payload}) {
            return {...state, activeStudent: payload};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudents.fulfilled, (state, action) => {
                return {
                    students: [...action.payload],
                    activeStudent: action.payload[0].id,
                };
            })
    }
});

export const {setActiveUser} = studentSlice.actions; 
export const studentReducer = studentSlice.reducer;