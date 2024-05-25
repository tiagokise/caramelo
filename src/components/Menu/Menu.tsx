import * as S from './Menu.styles';

export const Menu = () => {
    const menuButtons = [
        {
            title: 'Home',
            link: '/',
        },
        {
            title: 'About',
            link: '/about',
        },
        {
            title: 'Contact',
            link: '/contact',
        },
    ];
    return (
        <S.MenuContainer>
            <S.MenuTitle>Caramelo</S.MenuTitle>
            <S.MenuList>
                {menuButtons.map((button) => (
                    <S.MenuListItem key={button.title}>
                        <S.MenuLink href={button.link}>{button.title}</S.MenuLink>
                    </S.MenuListItem>
                ))}
            </S.MenuList>
        </S.MenuContainer>
    );
};
