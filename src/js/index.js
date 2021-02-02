// Импорт js модулей
import canvas from './modules/canvas';
import initStorage from './modules/init-local-storage';
import patternsTable from './modules/diagram-patterns-table';
import patternsMaker from './modules/diagram-pattern-maker';

initStorage();
patternsTable();
patternsMaker();
canvas();
