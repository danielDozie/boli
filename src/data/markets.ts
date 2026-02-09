import React from "react";
import { Landmark, Music, Trophy, MapPin, User, Briefcase, GraduationCap, Tv, Flame } from "lucide-react";

export interface MarketOption {
    label: string;
    value?: string;
}

export interface Market {
    id: string;
    title: string;
    iconName: string;
    status: "active" | "expiring" | "closed";
    category: string;
    date: string;
    options: MarketOption[];
    sentiment?: string;
    yesProfit?: string;
    noProfit?: string;
}

export const categories = [
    { id: "all", label: "All Markets", icon: "Flame" },
    { id: "politics", label: "Politics", icon: "Landmark" },
    { id: "entertainment", label: "Entertainment", icon: "Tv" },
    { id: "sports", label: "Sports", icon: "Trophy" },
    { id: "economy", label: "Economy", icon: "Briefcase" },
];

export const nigerianMarkets: Market[] = [
    {
        id: "naira-exchange-2024",
        title: "Will the Naira reach 2000/$ by year end?",
        iconName: "Landmark",
        status: "active",
        category: "economy",
        date: "Dec 31, 2024",
        options: [{ label: "Yes", value: "65%" }, { label: "No", value: "35%" }],
        sentiment: "Highly Bullish",
        yesProfit: "1.8x",
        noProfit: "2.4x",
    },
    {
        id: "burna-grammy-2025",
        title: "Burna Boy to win another Grammy in 2025?",
        iconName: "Music",
        status: "active",
        category: "entertainment",
        date: "Feb 2025",
        options: [{ label: "Yes", value: "48%" }, { label: "No", value: "52%" }],
        sentiment: "Neutral",
        yesProfit: "2.1x",
        noProfit: "1.9x",
    },
    {
        id: "nigeria-afcon-win",
        title: "Will Nigeria win the next AFCON?",
        iconName: "Trophy",
        status: "active",
        category: "sports",
        date: "July 2025",
        options: [{ label: "Yes", value: "72%" }, { label: "No", value: "28%" }],
        sentiment: "Very Bullish",
        yesProfit: "1.5x",
        noProfit: "3.2x",
    },
    {
        id: "lagos-blue-line-target",
        title: "Lagos Blue Line to handle 500k daily passengers?",
        iconName: "MapPin",
        status: "active",
        category: "economy",
        date: "Dec 2024",
        options: [{ label: "Yes", value: "40%" }, { label: "No", value: "60%" }],
    },
    {
        id: "minimum-wage-q3",
        title: "New Minimum Wage implemented by Q3?",
        iconName: "Briefcase",
        status: "expiring",
        category: "politics",
        date: "Sept 2024",
        options: [{ label: "Yes", value: "85%" }, { label: "No", value: "15%" }],
    },
    {
        id: "osimhen-pl-transfer",
        title: "Victor Osimhen to sign for a PL club this summer?",
        iconName: "User",
        status: "active",
        category: "sports",
        date: "Aug 31, 2024",
        options: [{ label: "Yes", value: "55%" }, { label: "No", value: "45%" }],
    },
    {
        id: "wizkid-morayo-chart",
        title: "Wizkid 'Morayo' album to debut #1 on Billboard World?",
        iconName: "Music",
        status: "active",
        category: "entertainment",
        date: "2024",
        options: [{ label: "Yes", value: "90%" }, { label: "No", value: "10%" }],
    },
    {
        id: "dangote-refinery-fuel",
        title: "Will Dangote Refinery end fuel imports in 2024?",
        iconName: "Landmark",
        status: "active",
        category: "economy",
        date: "Oct 2024",
        options: [{ label: "Yes", value: "62%" }, { label: "No", value: "38%" }],
    },
    {
        id: "nigeria-gdp-2024",
        title: "Nigeria's GDP growth to exceed 3.5% in 2024?",
        iconName: "Briefcase",
        status: "active",
        category: "economy",
        date: "Jan 2025",
        options: [{ label: "Yes", value: "30%" }, { label: "No", value: "70%" }],
    },
    {
        id: "bbnaija-s9-winner",
        title: "Big Brother Naija Season 9 winner to be female?",
        iconName: "Tv",
        status: "active",
        category: "entertainment",
        date: "Oct 2024",
        options: [{ label: "Yes", value: "50%" }, { label: "No", value: "50%" }],
    },
    { id: "3mb-closure-2024", title: "Third Mainland Bridge closure again this year?", iconName: "MapPin", status: "active", category: "all", date: "2024", options: [{ label: "Yes" }, { label: "No" }] },
    { id: "davido-o2-2025", title: "Davido to headline O2 Arena again in 2025?", iconName: "Music", status: "active", category: "entertainment", date: "2025", options: [{ label: "Yes" }, { label: "No" }] },
    { id: "super-eagles-coach", title: "Super Eagles coach to be indigenous?", iconName: "Trophy", status: "expiring", category: "sports", date: "Next Month", options: [{ label: "Yes" }, { label: "No" }] },
    { id: "lekki-tolls-2024", title: "Lekki Epe Expressway tolls to increase?", iconName: "Landmark", status: "active", category: "economy", date: "2024", options: [{ label: "Yes" }, { label: "No" }] },
    { id: "asuu-strike-2024", title: "ASUU strike to occur in 2024?", iconName: "GraduationCap", status: "active", category: "politics", date: "2024", options: [{ label: "Yes" }, { label: "No" }] },
    { id: "rema-grammy-2025", title: "Rema to win 'Best Global Music Performance'?", iconName: "Music", status: "active", category: "entertainment", date: "2025", options: [{ label: "Yes" }, { label: "No" }] },
    { id: "tems-oscar-nom", title: "Tems Oscar nomination for next soundtrack?", iconName: "Tv", status: "active", category: "entertainment", date: "2025", options: [{ label: "Yes" }, { label: "No" }] },
    { id: "fintech-funding-2024", title: "Fintech to receive $1B+ total funding in 2024?", iconName: "Briefcase", status: "active", category: "economy", date: "Jan 2025", options: [{ label: "Yes" }, { label: "No" }] },
    { id: "nigeria-oil-prod", title: "Oil production to hit 1.8m barrels/day?", iconName: "Landmark", status: "active", category: "economy", date: "Dec 2024", options: [{ label: "Yes" }, { label: "No" }] },
    { id: "nigeria-olympics-gold", title: "Nigerian team for Olympics to win Gold?", iconName: "Trophy", status: "active", category: "sports", date: "Aug 2024", options: [{ label: "Yes" }, { label: "No" }] },
    { id: "abuja-summit-nov", title: "Abuja to host major International Summit?", iconName: "Landmark", status: "active", category: "politics", date: "Nov 2024", options: [{ label: "Yes" }, { label: "No" }] },
    { id: "amapiano-dominance", title: "Amapiano to remain #1 genre in Nigeria?", iconName: "Music", status: "active", category: "entertainment", date: "Dec 2024", options: [{ label: "Yes" }, { label: "No" }] },
    { id: "budget-2025-passage", title: "Will the 2025 Budget be passed before Jan?", iconName: "Briefcase", status: "active", category: "politics", date: "Dec 2024", options: [{ label: "Yes" }, { label: "No" }] },
    { id: "funke-akindele-n2b", title: "Funke Akindele new movie to break N2B?", iconName: "Tv", status: "active", category: "entertainment", date: "Dec 2024", options: [{ label: "Yes" }, { label: "No" }] },
    { id: "electricity-tariff-q4", title: "Will electricity tariff drop in Q4?", iconName: "Landmark", status: "active", category: "economy", date: "Dec 2024", options: [{ label: "Yes" }, { label: "No" }] },
    { id: "super-eagles-lookman", title: "Next Super Eagles captain to be Lookman?", iconName: "User", status: "active", category: "sports", date: "2025", options: [{ label: "Yes" }, { label: "No" }] },
    { id: "lagos-electric-buses", title: "Lagos to start commercial Electric Buses?", iconName: "MapPin", status: "active", category: "economy", date: "Dec 2024", options: [{ label: "Yes" }, { label: "No" }] },
    { id: "new-state-creation", title: "New State creation bill to pass Q1?", iconName: "Landmark", status: "active", category: "politics", date: "Mar 2025", options: [{ label: "Yes" }, { label: "No" }] },
    { id: "ayra-rihanna-collab", title: "Ayra Starr to collaborate with Rihanna?", iconName: "Music", status: "active", category: "entertainment", date: "2024", options: [{ label: "Yes" }, { label: "No" }] },
    { id: "fct-agencies-lagos", title: "Federal Capital to move some agencies to Lagos?", iconName: "Landmark", status: "expiring", category: "politics", date: "2024", options: [{ label: "Yes" }, { label: "No" }] },
];

export const getIcon = (name: string) => {
    const icons: Record<string, any> = { Landmark, Music, Trophy, MapPin, User, Briefcase, GraduationCap, Tv, Flame };
    const Icon = icons[name] || Flame;
    return Icon;
};
