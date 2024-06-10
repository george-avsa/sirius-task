import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "Entities/Filter/store/filter.store";
import { lessonReducer } from "Entities/Lesson/store/lesson.store";
import { scheduleReducer } from "Entities/Schedule/store/schedule.store";
import { studentReducer } from "Entities/Students/store/students.store";
import { userReducer } from "Entities/User/store/user.store";
import { statsReducer } from "Pages/Main/model/stats.store";
import { servicesReducer } from "Widgets/LoginForm/model/loginReducer";
import { menuItemsReducer } from "Widgets/Navigation/store/menuItems";

const rootReducer = {
    loginForm: servicesReducer,
    user: userReducer,
    student: studentReducer,
    lesson: lessonReducer,
    schedule: scheduleReducer,
    filter: filterReducer,
    stats: statsReducer,
    menuItems: menuItemsReducer,
}

export const store = configureStore({
    reducer: rootReducer,
    // жалуется на хранение svg в сторе, по факту это stirng
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false  
    }),
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;