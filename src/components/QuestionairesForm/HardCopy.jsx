import React from 'react'
import FormCss from './Form.module.scss'
const HardCopy = () => {
  return (
    <div
      className={FormCss.page}
      // style={{ backgroundImage: 'url(images/TLTM.png)' }}
    >
      {/* <img alt="" src="images/TLTM.png" /> */}
      <h1>
        Mutual Non-Disclosure Agreement <br /> Business Discussions
      </h1>
      <p>
        This Mutual Non-Disclosure Agreement ("<b>Agreement</b>"), dated as of
        ________ ("<b>Effective Date</b>"), is agreed by and between [COMPANY
        1], with primary offices located at [STREET ADDRESS] (“_______”), and
        [COMPANY 2], with primary offices located at [STREET ADDRESS]
        ("_______").
      </p>
      <p>
        Company 1 and Company 2 are individually referred to herein as, the “
        <b>Party</b>”, and collectively as, the “<b>Parties</b>”.
      </p>
      <h5>RECITALS</h5>
      <p>
        <b>WHEREAS</b>, the Parties desire to explore and engage in discussions
        regarding a potential business opportunity of mutual interest (“
        <b>Business Discussion</b>”);
      </p>
      <p>
        <b>WHEREAS</b>, either Party may disclose (a “<b>Disclosing Party</b>
        ”) to the other Party (a “<b>Recipient</b>”) confidential and
        proprietary information.
      </p>
      <p>
        NOW, <b>THEREFORE</b>, forvaluable consideration of the rights and
        obligations hereunder, the Parties hereby agree as follows:
      </p>
      <p>
        <b>1. Confidentiality</b>
      </p>
      <p>
        (a) The Parties understands and acknowledges that in connection with the
        Business Discussions, each Party will receive, have access to, and learn
        confidential, secret, and proprietary information, documents, materials,
        data, and other information, in tangible and intangible form, of and
        relating to the other Party, its businesses, and existing and
        prospective customers, suppliers, investors and other associated third
        parties ("Confidential Information"). Confidential Information also
        includes, but is not limited to, all information not generally known to
        the public, whether oral, in writing, electronic means or any other form
        or medium, relating directly or indirectly to business processes and
        practices, methods, policies, plans, publications, documents, research,
        operations, services, strategies, techniques, agreements, contracts,
        terms of agreements, transactions, potential transactions, negotiations,
        know-how, trade secrets, computer software, applications, software
        design, web design, work-in-process, databases, device configurations,
        compilations, metadata, technologies, manuals, records, articles,
        systems, material, sources of material, supplier information, vendor
        information, financial information, accounting information, legal
        information, marketing information, advertising information, credit
        information, design information, payroll information, staffing
        information, personnel information, developments, reports, internal
        controls, graphics, drawings, market studies, sales information,
        revenue, costs, notes, communications, algorithms, product plans,
        designs, styles, models, ideas, audiovisual programs, inventions,
        unpublished patent applications, original works of authorship,
        discoveries, experimental processes, experimental results,
        specifications, vendor lists
      </p>
    </div>
  )
}

export default HardCopy
