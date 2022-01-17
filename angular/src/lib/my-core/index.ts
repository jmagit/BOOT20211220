import { from } from 'rxjs'

export { MyCoreModule } from './modules/my-core.module'
export * from './services/logger.service'
export { ElipsisPipe, CapitalizePipe } from './pipes/cadenas.pipe'
export { ToComaDecimalPipe } from './pipes/numericos.pipe'
export { enmayusculas, NIFValidator } from './directives/validadores.directive';
