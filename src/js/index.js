// Импорт js модулей
import initStorage from './modules/domain/init-local-storage';
import patternsTable from './modules/diagram-patterns-table';
import patternsMaker from './modules/diagram-pattern-maker';
import diagramMaker from './modules/diagram-maker';
import canvas from './modules/domain/canvas';

initStorage();
patternsTable();
patternsMaker();
diagramMaker();
canvas();
