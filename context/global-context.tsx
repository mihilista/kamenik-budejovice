
'use client';
import React, {createContext, useCallback, useContext, useMemo, useReducer} from 'react';

interface State {
    burgerMenuActive: boolean;
    scrollPosition: number;
}

export interface ContextState extends State {
    setBurgerMenuActive: () => void;
    setBurgerMenuInactive: () => void;
    toggleBurgerMenu: () => void;
    state: State;
    dispatch: React.Dispatch<Action>;
}

interface Action {
    type: string;
    payload?: any;
}

const GlobalContext = createContext<ContextState | undefined>(undefined);

const initialState: State = {
    burgerMenuActive: false,
    scrollPosition: 0,
};

const globalReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_BURGER_MENU_ACTIVE':
            return {
                ...state,
                burgerMenuActive: true,
                scrollPosition: action.payload // Store scroll position
            };
        case 'SET_BURGER_MENU_INACTIVE':
            return {
                ...state,
                burgerMenuActive: false
            };
        case 'TOGGLE_BURGER_MENU':
            return {
                ...state,
                burgerMenuActive: !state.burgerMenuActive,
                scrollPosition: action.payload ?? state.scrollPosition
            };
        default:
            console.error('Unhandled action type:', action.type);
            return state;
    }
};

export const GlobalProvider = ({children}: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState);

    const setBurgerMenuActive = useCallback(() => {
        const scrollY = window.scrollY; // Capture scroll position
        document.documentElement.classList.remove('scroll-smooth'); // Remove smooth scroll
        document.body.style.top = `-${scrollY}px`;
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        dispatch({ type: 'SET_BURGER_MENU_ACTIVE', payload: scrollY });
    }, [dispatch]);

    const setBurgerMenuInactive = useCallback(() => {
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        window.scrollTo(0, state.scrollPosition); // Restore scroll position
        document.documentElement.classList.add('scroll-smooth'); // Re-add smooth scroll
        dispatch({ type: 'SET_BURGER_MENU_INACTIVE' });
    }, [dispatch, state.scrollPosition]);

    const toggleBurgerMenu = useCallback(() => {
        if (state.burgerMenuActive) {
            setBurgerMenuInactive();
        } else {
            setBurgerMenuActive();
        }
    }, [state.burgerMenuActive, setBurgerMenuActive, setBurgerMenuInactive]);

    const contextValue = useMemo(() => {
        return {
            burgerMenuActive: state.burgerMenuActive,
            scrollPosition: state.scrollPosition, // Include scrollPosition here
            setBurgerMenuActive,
            setBurgerMenuInactive,
            toggleBurgerMenu,
            state,
            dispatch
        };
    }, [state, setBurgerMenuActive, setBurgerMenuInactive, toggleBurgerMenu]);

    return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);
