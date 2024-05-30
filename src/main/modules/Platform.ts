import { AuthenticationModule } from './AuthenticationModule';
import { DashBoardModule } from './DashBoardModule';
import { classes } from 'polytype';
import { APIPlatform } from './APIPlatform';
import { AuthModuleTripcare } from './AuthModuleTripcare';

/**
 * This class represents the main platform class, implementing `IPlatform` and extending all Module classes.
 *
 * As new Module classes are introduced, this `Platform` class should be updated to extend
 * those new Module classes to maintain comprehensive platform capabilities, as methods can only be accessed from this class.
 *
 * For example:
 * `export default class Platform extends AModule, BModule, CModule, DModule implements IPlatform`
 */
export default class Platform extends classes (AuthenticationModule, DashBoardModule, APIPlatform, AuthModuleTripcare){

}