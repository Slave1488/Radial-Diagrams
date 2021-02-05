// Импорт js модулей
import initStorage from './modules/init-local-storage';
import patternsTable from './modules/diagram-patterns-table';
import patternsMaker from './modules/diagram-pattern-maker';
import diagramMaker from './modules/diagram-maker';
import canvas from './modules/canvas';

initStorage();
patternsTable();
patternsMaker();
diagramMaker();
canvas();
