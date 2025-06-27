import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import aws from './aws.png';
import springboot from './springboot.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo1.png';
import logo_dark from './logo_dark1.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import intellij from './intellij.png';
import postman from './postman.png';
import docker from './docker.png';
import postgres from './postgres.png';
import redis from './redis.png';
import kafka from './kafka.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    aws,
    springboot,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    intellij,
    postman,
    docker,
    postgres,
    redis,
    kafka
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Spring Boot App',
        description: 'Backend App',
        bgImage: '/work-2.png',
    },
    {
        title: 'AWS',
        description: 'Cloud Hosting',
        bgImage: '/work-3.png',
    },
    {
        title: 'Java Build up',
        description: 'Core Java Projects',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Frontend Developing', description: "Front-end development is the process of creating a website or web application's...", link: 'https://www.geeksforgeeks.org/front-end-development/' },
    { icon: assets.ui_icon, title: 'Backend Developing', description: 'the process of building the server-side of an application and...', link: 'https://www.geeksforgeeks.org/backend-development/' },
    { icon: assets.mobile_icon, title: 'Cloud Architect', description: "A cloud architect is a professional who manages a company's cloud...", link: 'https://www.geeksforgeeks.org/architecture-of-cloud-computing/' },
    { icon: assets.graphics_icon, title: 'Database Management', description: 'A database management system (DBMS) is a software system for creating and managing...', link: 'https://www.geeksforgeeks.org/introduction-of-dbms-database-management-system-set-1/' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Java, Python, c++'},
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science and Engineering' },
      {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Projects',
    description: 'Built multiple projects across full-stack development, cloud integration, and backend systems.',
    link: 'https://github.com/Waseeq-Zafar' 
  }
];

export const toolsData = [
    assets.vscode, assets.intellij, assets.postgres, assets.mongodb, assets.redis, assets.aws, assets.springboot, assets.git, assets.postman, assets.docker, assets.kafka
];