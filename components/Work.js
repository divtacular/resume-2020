import React from 'react';

const Work = () => {
    return (
        <div className={"work-experience"}>
            <div className={"work"}>
                <header>
                    <span className={"work_workplace"}>boohoo.com</span>
                    <span className={"work_year"}>March 2016 - June 2002</span>
                    <span className={"work_url"}>https://www.boohoo.com/</span>
                </header>
                <div className={"work_desc"}>
                    <h3>Frontend Developer - Salesforce Cloud Commerce</h3>
                </div>
            </div>
            <div className={"work"}>
                <header>
                    <span className={"work_workplace"}>boohoo.com</span>
                    <span className={"work_year"}>September 2014 - March 2016</span>
                    <span className={"work_url"}>https://www.boohoo.com/</span>
                </header>
                <div className={"work_desc"}>
                    <h3>Frontend Developer - Magento</h3>
                </div>
            </div>
            <div className={"work"}>
                <header>
                    <span className={"work_workplace"}>FirstFound</span>
                    <span className={"work_year"}>October 2012 – September 2014</span>
                    <span className={"work_url"}>https://www.firstfound.co.uk/</span>
                </header>
                <div className={"work_desc"}>
                    <h3>Senior Web Developer</h3>
                    <p>Due to the success of the development team we were able to grow from a team of two a team of
                        eight. I was promoted to senior developer and on top of my existing responsibilities I was to
                        perform the on going training for the team and to act as a mentor for an apprentice member.</p>

                    <p><strong>Highlights</strong></p>

                    <ul>
                        <li>Managed additional responsibilities to my team along side an already hectic work schedule.
                        </li>
                        <li>Managed team feedback and reported up the chain.</li>
                        <li>Worked closely with sales staff for quoting and to ensure accuracy of information sent.</li>
                        <li>Worked through and managed the challenges of growing a team.</li>
                    </ul>
                </div>
            </div>
            <div className={"work"}>
                <header>
                    <span className={"work_workplace"}>FirstFound</span>
                    <span className={"work_year"}>January 2010 - October 2012</span>
                    <span className={"work_url"}>https://www.firstfound.co.uk/</span>
                </header>
                <div className={"work_desc"}>
                    <h3>Web Developer</h3>
                    <p>In 2010 I was selected to lead the formation of the web team. I established my role as the sole
                        developer in the company, balancing internal and external projects, and was able to deliver
                        projects to strict schedules. The projects were ranged from static HTML sites to fully bespoke
                        WordPress and Magento sites, designed in Photoshop for me to complete. I was also responsible
                        for the creation of company emails, which meant accurately building HTML emails by hand for all
                        major platforms, including Outlook.</p>

                    <p><strong>Highlights</strong></p>
                    <ul>
                        <li>Key contributor in establishing successful new department.</li>
                        <li>Built sites for businesses funded by government business grants, with strict accessibility
                            requirements.
                        </li>
                        <li>Developed complex WordPress themes and plugins, including a sophisticated national skip hire
                            site with custom checkout.
                        </li>
                        <li>Responsible for hosting setup and deployment for each site, including software and email
                            setup.
                        </li>
                        <li>Developed custom Magento themes and plugins, including a product generator which built new
                            products dynamically from selected options.
                        </li>
                        <li>Built a bespoke business directory to promote carbon neutral businesses.</li>
                    </ul>
                </div>
            </div>
            <div className={"work"}>
                <header>
                    <span className={"work_workplace"}>FirstFound</span>
                    <span className={"work_year"}>October 2008 – January 2010</span>
                    <span className={"work_url"}>https://www.firstfound.co.uk/</span>
                </header>
                <div className={"work_desc"}>
                    <h3>SEO Consultant</h3>
                    <p>In my first office role I was responsible for the complete on-site SEO for client sites.
                        Strategies were implemented and evaluated on an on going basis, with adjustments made as
                        customer needs and results required.</p>
                    <p><strong>Highlights</strong></p>
                    <p>Critically analysed success of strategies and alternatives as campaign needs evolved.</p>

                </div>
            </div>
        </div>
    );
};

export default Work;
