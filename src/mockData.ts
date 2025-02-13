export const mockItemCards = Array.from({length: 38}, (_, index) => index);
export const mockSidebarItems = Array.from({length: 38}, (_, index) => index);
export const articleCategory = ["Адабы",
    "Вера",
    "Грехи",
    "Дуа",
    "Имена",
    "Ислам вопросы и ответы",
    "Коран",
    "Намаз",
    "Омовение",
    "Пост",
    "Пророк Мухаммад",
    "Пророки",
    "Рай и Ад",
    "Смерть",
    "Хадж",
    "Хадисы",
    "Халяль"]
export const mockSidebarGroup=  Array.from({length: 8}, (_, index) => index).map(el=>({
    title:"Арабский язык",
    categoryCount: 72,
    articleCount: 920,
    categories: articleCategory
}));