const universities = [
    {
        name: 'Australian National University',
        image: 'australian national university.png'
    },
    {
        name: 'University of Melbourne',
        image: 'university of melbourne.png'
    },
    {
        name: 'University of Sydney',
        image: 'university of sydney.png'
    },
    {
        name: 'University of Queensland',
        image: 'uni of queen.png'
    },
    {
        name: 'University of New South Wales',
        image: 'university of new south wales.png'
    },
    {
        name: 'Monash University',
        image: 'monash university.png'
    },
    {
        name: 'University of Western Australia',
        image: 'university of western aus.png'
    },
    {
        name: 'University of Adelaide',
        image: 'university of adelaide.png'
    },
    {
        name: 'University of Technology Sydney',
        image: 'university of tech sydney.png'
    },
    {
        name: 'University of Canberra',
        image: 'university of canberra.png'
    },
    {
        name: 'Macquarie University',
        image: 'macquarie university.png'
    },
    {
        name: 'Queensland University of Technology',
        image: 'queensland university of tech.png'
    },
    {
        name: 'RMIT University​',
        image: 'RMIT university.png'
    },
    {
        name: 'University of Wollongong​',
        image: 'university of wollongong.png'
    },
    {
        name: 'Curtin University​',
        image: 'curtin univ.png'
    },
    {
        name: 'Deakin University​',
        image: 'deakin univ.png'
    },
    {
        name: 'University of Newcastle​',
        image: 'uni of newcastle.png'
    },
    {
        name: 'Griffith University​',
        image: 'griffith uni.png'
    },
    {
        name: 'La Trobe University​​',
        image: 'la trobe university.png'
    },
    {
        name: 'University of Tasmania​',
        image: 'uni of tasmania.png'
    }
    
];

function createUniversityCard(university) {
    return `
        <div class="university-card">
            <img src="${university.image}" alt="${university.name}">
            <div class="card-content">
                <h3>${university.name}</h3>
                <a href="#" class="know-more-btn">Know More ></a>
            </div>
        </div>
    `;
}

function renderUniversities() {
    const grid = document.getElementById('universityGrid');
    grid.innerHTML = universities.map(createUniversityCard).join('');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', renderUniversities);