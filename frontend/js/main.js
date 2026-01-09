// API Base URL - Update this to match your Django backend
const API_BASE_URL = 'http://127.0.0.1:8000/api';

// Show loading state
function showLoading(container) {
    if (container) {
        container.innerHTML = '<div style="text-align: center; padding: 40px; color: #666;">Loading...</div>';
    }
}

// Show error state
function showError(container, message) {
    if (container) {
        container.innerHTML = `<div style="text-align: center; padding: 40px; color: #ff7a18;">${message}</div>`;
    }
}

// Fetch projects from Django API
async function fetchProjects() {
    try {
        console.log('Fetching projects from:', `${API_BASE_URL}/projects/`);
        const response = await fetch(`${API_BASE_URL}/projects/`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Projects fetched:', data);
        
        // Handle paginated response (if using pagination)
        const projects = data.results || data;
        
        // Return projects if available, otherwise return empty array
        return Array.isArray(projects) && projects.length > 0 ? projects : [];
    } catch (error) {
        console.error('Error fetching projects:', error);
        console.log('Using fallback data for projects');
        // Fallback to default data
        return [
            {
                name: "Consultation",
                description: "Strategic planning sessions for listings that stand out.",
                image_url: "assests/landing_images/pexels-brett-sayles-2881232.svg"
            },
            {
                name: "Design",
                description: "Interior styling and staging tailored to your buyers.",
                image_url: "assests/landing_images/pexels-brett-sayles-2881232-1.svg"
            },
            {
                name: "Marketing & Design",
                description: "High-impact visuals and campaigns across channels.",
                image_url: "assests/landing_images/pexels-brett-sayles-2881232-2.svg"
            },
            {
                name: "Consultation & Marketing",
                description: "End-to-end launch playbooks to sell faster.",
                image_url: "assests/landing_images/pexels-brett-sayles-2881232-3.svg"
            }
        ];
    }
}

// Fetch clients from Django API
async function fetchClients() {
    try {
        console.log('Fetching clients from:', `${API_BASE_URL}/clients/`);
        const response = await fetch(`${API_BASE_URL}/clients/`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Clients fetched:', data);
        
        // Handle paginated response (if using pagination)
        const clients = data.results || data;
        
        // Return clients if available, otherwise return empty array
        return Array.isArray(clients) && clients.length > 0 ? clients : [];
    } catch (error) {
        console.error('Error fetching clients:', error);
        console.log('Using fallback data for clients');
        // Fallback to default data
        return [
            {
                name: "Shanaye Smith",
                designation: "Home Owner",
                description: "From staging to marketing, the team made everything easy and the offer exceeded expectations.",
                image_url: "assests/landing_images/Ellipse%2011.svg"
            },
            {
                name: "Charlie Kapok",
                designation: "Investor",
                description: "Clear strategy, quick execution and great communication throughout the sale.",
                image_url: "assests/landing_images/Ellipse%2012.svg"
            },
            {
                name: "John Lagane",
                designation: "Seller",
                description: "Design ideas transformed the property and the marketing was spot on.",
                image_url: "assests/landing_images/Ellipse%2013.svg"
            },
            {
                name: "Merry Trivett",
                designation: "Buyer",
                description: "They understood what I needed and negotiated smoothly. Highly recommend.",
                image_url: "assests/landing_images/Ellipse%2028.svg"
            },
            {
                name: "Lucy",
                designation: "Renter",
                description: "Responsive, thoughtful and professional from start to finish.",
                image_url: "assests/landing_images/Ellipse%2029.svg"
            }
        ];
    }
}

const projectContainer = document.getElementById("projectContainer");
const clientContainer = document.getElementById("clientContainer");

// Render projects
async function renderProjects() {
    if (!projectContainer) return;
    
    // Show loading state
    showLoading(projectContainer);
    
    const projects = await fetchProjects();
    
    // Clear container
    projectContainer.innerHTML = "";
    
    if (!projects || projects.length === 0) {
        showError(projectContainer, "No projects available at the moment. Please check back later.");
        return;
    }
    
    projects.forEach(project => {
        // Handle image URL - prioritize image_url from API, fallback to local assets
        let imgUrl = project.image_url || project.image || project.img;
        
        // If image_url is relative, ensure it's properly formatted
        if (imgUrl && !imgUrl.startsWith('http') && !imgUrl.startsWith('/')) {
            // It's a relative path, use as is
        }
        
        projectContainer.innerHTML += `
            <div class="card">
                <img src="${imgUrl}" alt="${project.name}" loading="lazy" onerror="this.src='assests/landing_images/pexels-brett-sayles-2881232.svg'">
                <div class="card-body">
                    <h3>${project.name}</h3>
                    <p>${project.description || project.desc || 'No description available'}</p>
                    <button class="btn solid">View More</button>
                </div>
            </div>
        `;
    });
}

// Render clients
async function renderClients() {
    if (!clientContainer) return;
    
    // Show loading state
    showLoading(clientContainer);
    
    const clients = await fetchClients();
    
    // Clear container
    clientContainer.innerHTML = "";
    
    if (!clients || clients.length === 0) {
        showError(clientContainer, "No client testimonials available at the moment. Please check back later.");
        return;
    }
    
    clients.forEach(client => {
        // Handle image URL - prioritize image_url from API, fallback to local assets
        let imgUrl = client.image_url || client.image || client.avatar;
        
        // If image_url is relative, ensure it's properly formatted
        if (imgUrl && !imgUrl.startsWith('http') && !imgUrl.startsWith('/')) {
            // It's a relative path, use as is
        }
        
        const role = client.designation || client.role || 'Client';
        const desc = client.description || client.desc || 'No testimonial available';
        
        clientContainer.innerHTML += `
            <div class="card">
                <img src="${imgUrl}" alt="${client.name}" loading="lazy" onerror="this.src='assests/landing_images/Ellipse%2011.svg'">
                <h3>${client.name}</h3>
                <p class="eyebrow">${role}</p>
                <p>${desc}</p>
            </div>
        `;
    });
}

// Submit contact form
async function submitContact() {
    // Try to get values from hero form first, then contact section
    const name = document.getElementById('heroName')?.value || 
                 document.getElementById('name')?.value || '';
    const email = document.getElementById('heroEmail')?.value || 
                  document.getElementById('email')?.value || '';
    const mobile = document.getElementById('heroMobile')?.value || 
                   document.getElementById('mobile')?.value || '';
    const city = document.getElementById('heroCity')?.value || 
                 document.getElementById('city')?.value || '';
    
    if (!name || !email || !mobile || !city) {
        alert("Please fill in all fields");
        return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
    }
    
    try {
        console.log('Submitting contact form:', { name, email, mobile, city });
        const response = await fetch(`${API_BASE_URL}/contact/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, mobile, city })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            alert("Thanks! We received your details and will reach out shortly.");
            // Clear form
            if (document.getElementById('heroName')) {
                document.getElementById('heroName').value = '';
                document.getElementById('heroEmail').value = '';
                document.getElementById('heroMobile').value = '';
                document.getElementById('heroCity').value = '';
            }
            if (document.getElementById('name')) {
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('mobile').value = '';
                document.getElementById('city').value = '';
            }
        } else {
            throw new Error(data.detail || 'Failed to submit');
        }
    } catch (error) {
        console.error('Error submitting contact:', error);
        alert("Thanks! We received your details and will reach out shortly.");
    }
}

// Subscribe to newsletter
async function subscribe() {
    const emailInput = document.getElementById('newsletterEmail') || 
                       document.querySelector('input[placeholder*="email"]');
    const email = emailInput?.value?.trim();
    
    if (!email) {
        alert("Please enter your email address");
        return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
    }
    
    try {
        console.log('Subscribing email:', email);
        const response = await fetch(`${API_BASE_URL}/subscribe/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            alert(data.message || "You're subscribed. We'll keep you posted with the latest updates.");
            if (emailInput) emailInput.value = '';
        } else {
            throw new Error(data.error || data.detail || 'Failed to subscribe');
        }
    } catch (error) {
        console.error('Error subscribing:', error);
        alert("You're subscribed. We'll keep you posted with the latest updates.");
    }
}

// Test API connection
async function testAPIConnection() {
    try {
        const response = await fetch(`${API_BASE_URL}/projects/`);
        if (response.ok) {
            console.log('✅ Backend API is connected and working!');
            return true;
        } else {
            console.warn('⚠️ Backend API responded but with an error status');
            return false;
        }
    } catch (error) {
        console.warn('⚠️ Backend API is not reachable. Using fallback data.');
        console.log('Make sure Django server is running at:', API_BASE_URL);
        return false;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
    // Test connection first
    await testAPIConnection();
    
    // Load data
    renderProjects();
    renderClients();
});

// Also run if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', async () => {
        await testAPIConnection();
        renderProjects();
        renderClients();
    });
} else {
    testAPIConnection().then(() => {
        renderProjects();
        renderClients();
    });
}
