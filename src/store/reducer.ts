import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export type Category = {
  description: string;
  identifier: string;
};

export type Channel = {
  brightness: number;
  contrast: number;
  description: string;
  identifier: string;
};

export type State = {
  categories: Array<Category>;
  channels: Array<Channel>;
  selected?: string;
  maximized: boolean;
};

const initialState: State = {
  categories: [
    {
      description: 'Cell membrane',
      identifier: uuidv4()
    },
    {
      description: 'Nucleus',
      identifier: uuidv4()
    }
  ],
  channels: [
    {
      brightness: 0.0,
      contrast: 0.0,
      description: 'Hoechst 33342',
      identifier: uuidv4()
    },
    {
      brightness: 0.0,
      contrast: 0.0,
      description: 'Concanavalin A',
      identifier: uuidv4()
    },
    {
      brightness: 0.0,
      contrast: 0.0,
      description: 'SYTO 14',
      identifier: uuidv4()
    },
    {
      brightness: 0.0,
      contrast: 0.0,
      description: 'Phalloidin and wheat germ agglutinin (WGA)',
      identifier: uuidv4()
    },
    {
      brightness: 0.0,
      contrast: 0.0,
      description: 'MitoTracker Deep Red FM',
      identifier: uuidv4()
    }
  ],
  maximized: true
};

export const slice = createSlice({
  initialState: initialState,
  name: 'image-viewer',
  reducers: {
    createCategory: (state, action: PayloadAction<Category>) => {
      state.categories = [...state.categories, action.payload];
    },
    createChannel: (state, action: PayloadAction<Channel>) => {
      state.channels = [...state.channels, action.payload];
    },
    editCategory: (state, action: PayloadAction<Category>) => {
      const index: number = state.categories.findIndex((category: Category) => {
        return category.identifier === action.payload.identifier;
      });

      state.categories[index] = action.payload;
    },
    editChannel: (state, action: PayloadAction<Channel>) => {
      const index: number = state.channels.findIndex((channel: Channel) => {
        return channel.identifier === action.payload.identifier;
      });

      state.channels[index] = action.payload;
    },
    deleteCategory: (state, action: PayloadAction<Category>) => {
      state.categories = state.categories.filter((category: Category) => {
        return action.payload.identifier !== category.identifier;
      });
    },
    deleteChannel: (state, action: PayloadAction<Channel>) => {
      state.channels = state.channels.filter((channel: Channel) => {
        return action.payload.identifier !== channel.identifier;
      });
    },
    maximize: state => {
      state.maximized = true;
    },
    minimize: state => {
      state.maximized = false;
    },
    select: (state, action: PayloadAction<Category>) => {
      state.selected = action.payload.identifier;
    }
  }
});
