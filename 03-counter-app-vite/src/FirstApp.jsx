import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
    //Mejor has el defaultProps, pero sino...
    // if (!title) {
    //     throw new Error('El title no existe');
    // }
    return (
        <>
            <h1> {title} </h1>
            {/* {<code>{ JSON.stringify( newMesage )}</code>} */}
            <p> {subTitle} </p>
            <p> {name} </p>
        </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
    title: 'No hay título',
    subTitle: 'No hay subtítulo',
    name: 'Ismael Morales'
}