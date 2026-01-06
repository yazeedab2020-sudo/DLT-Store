const products = [
    {
        id: 'cyberpunk-2077',
        name: 'Cyberpunk 2077',
        price: 199,
        image: 'https://i.ytimg.com/vi/qIcTM8WXFjk/maxresdefault.jpg',
        developer: 'CD Projekt Red',
        category: 'PC Games',
        description: 'انغمس في نايت سيتي، حيث المستقبل المظلم والمشرق في آن واحد. تجربة لعب لا مثيل لها تنتظرك.',
        longDescription: 'استعد لدخول أخطر مدينة في المستقبل! في Cyberpunk 2077، أنت لا تلعب مجرد لعبة، بل تعيش حياة مرتزق إلكتروني يقاتل من أجل البقاء في عالم مفتوح مذهل بصرياً. خصص شخصيتك، اختر أسلوبك، وقرر مصيرك في قصة تتشكل بناءً على قراراتك. هل لديك الجرأة لتصبح أسطورة نايت سيتي؟',
        features: [
            'عالم مفتوح مستقبلي مذهل',
            'حرية كاملة في تخصيص الشخصية',
            'قصة عميقة ومتشعبة',
            'جرافيكس خيالي مع تقنية تتبع الأشعة'
        ],
        badges: ['HOT', 'PC Exclusive']
    },
    {
        id: 'elden-ring',
        name: 'Elden Ring',
        price: 229,
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202402/2214/fe6de6126062e4d38dd6c4cef9ba1966ee2440a43429dc98.jpg',
        developer: 'FromSoftware',
        category: 'PC Games',
        description: 'تحفة فنية من ميازاكي وجورج آر آر مارتن. عالم مفتوح مليء بالأسرار والتحديات.',
        longDescription: 'هل أنت مستعد لأعظم مغامرة في حياتك؟ Elden Ring ليست مجرد لعبة، إنها ملحمة أسطورية تأخذك في رحلة عبر "الأراضي الوسطى". واجه زعماء عمالقة، اكتشف أسراراً غامضة، وابنِ شخصيتك لتصبح "إلدن لورد". التحدي صعب، لكن النصر له طعم لا يوصف!',
        features: [
            'عالم مفتوح شاسع ومليء بالأسرار',
            'تصميم فني مبهر ومخلوقات فريدة',
            'نظام قتال عميق ومكافئ',
            'قصة غامضة من تأليف جورج آر آر مارتن'
        ],
        badges: ['Best Seller', 'RPG']
    },
    {
        id: 'god-of-war',
        name: 'God of War',
        price: 179,
        image: 'https://cdn1.epicgames.com/spt-assets/edaff839f0734d16bc89d2ddb1dc9339/steel-magnolia-15owu.jpg',
        developer: 'Santa Monica Studio',
        category: 'Offline Games',
        description: 'رحلة كراتوس الأب والمحارب في الأراضي الاسكندنافية. قصة مؤثرة وأكشن جبار.',
        longDescription: 'كراتوس عاد، لكنه ليس كما عرفته من قبل. في رحلة محفوفة بالمخاطر لتعليم ابنه البقاء، يواجه آلهة ووحوش الميثولوجيا الإسكندنافية. مزيج مثالي بين القصة العاطفية والأكشن العنيف الذي يخطف الأنفاس. هذه اللعبة ستغير مفهومك عن ألعاب الفيديو للأبد.',
        features: [
            'قصة أب وابن مؤثرة وعميقة',
            'أسلوب قتال عنيف ومرضي',
            'جرافيكس مذهل وعوالم خلابة',
            'كاميرا واحدة مستمرة بدون انقطاع'
        ],
        badges: ['HOT', 'Offline', 'Story Rich']
    },
    {
        id: 'red-dead-redemption-2',
        name: 'Red Dead 2',
        price: 189,
        image: 'https://dailyspin.id/wp-content/uploads/2021/02/RDR-2-R.jpg',
        developer: 'Rockstar Games',
        category: 'Offline Games',
        description: 'أعظم لعبة عالم مفتوح في الغرب المتوحش. تفاصيل لا تصدق وقصة لا تنسى.',
        longDescription: 'عيش حياة الخارجين عن القانون في أواخر عصر الغرب المتوحش. آرثر مورغان وعصابة فان دير ليند في رحلة هروب وبقاء. عالم اللعبة ينبض بالحياة بشكل لا يصدق، كل تفصيل دقيق، كل شخصية لها قصة. Red Dead Redemption 2 ليست لعبة، إنها تجربة حياة كاملة.',
        features: [
            'عالم مفتوح حي وواقعي بشكل لا يصدق',
            'قصة درامية ملحمية وشخصيات لا تنسى',
            'مئات الأنشطة الجانبية والصيد والاستكشاف',
            'جودة رسومية وتفاصيل بصرية مذهلة'
        ],
        badges: ['New', 'Offline', 'Masterpiece']
    },
    {
        id: 'the-last-of-us',
        name: 'The Last of Us',
        price: 249,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2531310/94b5d8b3165a6fe592e406054b08a2dd24e2f848/capsule_616x353.jpg?t=1750959180',
        developer: 'Naughty Dog',
        category: 'Offline Games',
        description: 'قصة البقاء والأمل في عالم مدمر. علاقة جويل وإيلي التي أبكت الملايين.',
        longDescription: 'عندما ينهار العالم، لمن ستلجأ؟ انضم إلى جويل وإيلي في رحلة محفوفة بالمخاطر عبر أمريكا المدمرة. واجه المصابين والناجين اليائس. قصة ستلامس قلبك وتجعلك تحبس أنفاسك في كل لحظة. تجربة سينمائية تفاعلية لا مثيل لها.',
        features: [
            'سرد قصصي عاطفي وقوي',
            'أجواء توتر ورعب بقاء واقعية',
            'تمثيل صوتي وحركي بمستوى عالمي',
            'تحسينات رسومية مذهلة للجيل الجديد'
        ],
        badges: ['Offline', 'Emotional']
    },
    {
        id: 'horizon-forbidden-west',
        name: 'Horizon Forbidden West',
        price: 159,
        image: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2021/05/Horizon-Forbidden-West.jpg?w=1200&h=675&fit=crop',
        developer: 'Guerrilla Games',
        category: 'Offline Games',
        description: 'استكشف الغرب المحرم مع ألوي. آلات عملاقة وأسرار قديمة تنتظر الكشف.',
        longDescription: 'عد إلى عالم Horizon المذهل حيث الطبيعة استعادت الأرض والآلات العملاقة تحكم البرية. انطلق مع Aloy في مغامرة إلى الغرب المحرم، واجه آلات جديدة مرعبة، وقبائل غامضة، واكشف أسراراً قد تنقذ العالم من الدمار. جمال بصري يخطف الأبصار ومتعة استكشاف لا تنتهي.',
        features: [
            'عالم مفتوح خلاب ومتنوع البيئات',
            'قتال استراتيجي ضد آلات عملاقة',
            'قصة خيال علمي مثيرة',
            'استكشاف تحت الماء وتسلق الجبال'
        ],
        badges: ['Offline', 'Open World']
    }
];

function getProductById(id) {
    return products.find(product => product.id === id);
}
