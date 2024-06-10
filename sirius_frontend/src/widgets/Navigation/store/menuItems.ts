import { createSlice } from "@reduxjs/toolkit";

import HomeIcon from "Widgets/Navigation/assets/home.svg";
import CalendarIcon from "Widgets/Navigation/assets/calendar.svg";
import HeadphoneIcon from "Widgets/Navigation/assets/headphones.svg";
import WalletIcon from "Widgets/Navigation/assets/wallet.svg";
import CupIcon from "Widgets/Navigation/assets/cup.svg";
import PazzleIcon from "Widgets/Navigation/assets/pazzle.svg";
import FolderIcon from "Widgets/Navigation/assets/folder.svg";
import SettingsIcon from "Widgets/Navigation/assets/settings.svg";
import HelpIcon from "Widgets/Navigation/assets/help.svg";

type MenuItem = {
    icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>,
    text: string,
    slug: string,
    isAllowed: boolean,
    active?: boolean
} 

const initialState: MenuItem[] = [
    {
        icon: HomeIcon,
        text: 'Главная',
        slug: '/',
        isAllowed: true
    },
    {
        icon: CalendarIcon,
        text: 'Календарь',
        slug: '/schedule',
        isAllowed: true
    },
    {
        icon: WalletIcon,
        text: 'Оплата',
        slug: '',
        isAllowed: false
    },
    {
        icon: CupIcon,
        text: 'Достижения',
        slug: '',
        isAllowed: false
    },
    {
        icon: PazzleIcon,
        text: 'Тренажеры',
        slug: '',
        isAllowed: false
    },
    {
        icon: FolderIcon,
        text: 'Библиотека',
        slug: '',
        isAllowed: false
    },
    {
        icon: HeadphoneIcon,
        text: 'Проверка связи',
        slug: '',
        isAllowed: false
    },
    {
        icon: SettingsIcon,
        text: 'Настройки',
        slug: '',
        isAllowed: false
    },
    {
        icon: HelpIcon,
        text: 'Вопросы',
        slug: '',
        isAllowed: false
    },
]

const menuItemsSlice = createSlice({
    name: 'manuItems',
    initialState,
    reducers:{
        setActibeBySlug: (state, {payload}) => {
            return state.map(menuItem => {
                if (payload === menuItem.slug) {
                    return {...menuItem, active: true}
                }
                return {...menuItem, active: false}
            })
        }
    }
});

export const {setActibeBySlug} = menuItemsSlice.actions;
export const menuItemsReducer = menuItemsSlice.reducer;