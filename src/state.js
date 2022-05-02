import { ref } from 'vue';
import { useLocalstorage } from './composables/localstorage.js';

export const page = ref('#home');
    
export const { value: tasks } = useLocalstorage('tasks', []);

export const { value: bookmarks } = useLocalstorage('bookmarks', []);