import CalendarIcon from "@/components/icon/CalendarIcon";
import CommunityIcon from "@/components/icon/CommunityIcon";
import HeartIcon from "@/components/icon/HeartIcon";
import HomeIcon from "@/components/icon/HomeIcon";
import LogoutIcon from "@/components/icon/LogoutIcon";
import SettingIcon from "@/components/icon/SettingIcon";
import SocialIcon from "@/components/icon/SocialIcon";
import TrendingIcon from "@/components/icon/TrendingIcon";

export const MenuSideBarTop = [
    {
      name: 'Trang chủ',
      path: '/',
      icon: <HomeIcon/>,
    },
    {
      name: 'Yêu thích',
      path: '/favorites',
      icon: <HeartIcon/>,
    },
    {
      name: 'Trending',
      path: '/trending',
      icon: <TrendingIcon/>,
    },
    {
      name: 'Sắp chiếu',
      path: '/calendar',
      icon: <CalendarIcon/>,
    },
  ];
  export const MenuSideBarBottom = [
    {
      name: 'Cộng đồng',
      path: '/community',
      icon: <CommunityIcon/>,
    },
    {
      name: 'Liên hệ',
      path: '/contact',
      icon: <SocialIcon/>,
    },
    
  ];
  export const MenuSideBarAction = [
    {
      name: 'Cài đặt',
      path: '/settings',
      icon: <SettingIcon/>,
    },
    {
      name: 'Đăng xuất',
      path: '/logout',
      icon: <LogoutIcon/>,
    },
    
  ];