import classNames from 'classnames';


export function toggleInputClass(invalid: boolean): string {
    return classNames('form-control', {
        'is-invalid': invalid,
    });
}
