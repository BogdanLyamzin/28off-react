import Tabs from "./client/Tabs";
import Timer from "./client/Timer";

import './App.css';

import {tabItems} from "./tabItems"

function App() {
  return (
    <div className="App">
      {/* <Timer /> */}
      {/* <ol>
        <li>JSX</li>
        <li>Props</li>
        <li>Разделение страницы на компоненты</li>
        <li>Состояния и обработка событий (Классовые компоненты, Pure Components)</li>
        <li>Методы жизненного цикла</li>
        <li>Стилизация: SASS, CSS Module, CSS-in-JS (Styled Components)</li>
        <li>React Hooks</li>
        <li>React Context</li>
        <li>Работа с формами: Formik, React hooks form, React final form</li>
        <li>Создание многостраничного сайта (React Router DOM)</li>
        <li>Redux (Redux-thunk и Redux Toolkit)</li>
        <li>MobX Tree</li>
        <li>Оптимизации: useCallback, useMemo, React.memo, React.lazy, selectors</li>
      </ol> */}
      <Tabs items={tabItems} />
    </div>
  );
}

export default App;
