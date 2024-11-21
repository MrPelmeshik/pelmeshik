export const TestBlockComponent = (props: any | null): JSX.Element => {
    return <div style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',

        backgroundColor: 'var(--color-bg-default)',
        // border: '1px solid red',
    }}>
        TEST_BLOCK
    </div>;
};