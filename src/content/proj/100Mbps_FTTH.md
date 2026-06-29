---
title: 'FTTH/FTTO Core Network Services'
projectSizing: '>$1Mil'
excerpt: 'Malaysia 1st 100Mbps Fiber-to-the-Home, Fiber-to-the-Office with GPON network access and using open-source Operating System to deploy Core Network Services'
featuredImage: './images/100Mbps_FTTH.png'
projectDate: '2013-08-01'
publish: true
categories: ['Core Network']
descriptions: 'Deploy ASN Gateway to Southern and Central Region for Capacity Expansion'
---
## FTTH/FTTO Core Network Services

* **Role**      : "Engineering"
* **Company**   : "TIME dotcom"
* **Country**   : "Malaysia"
* **Value**     : "Over $1mil"
* **Customer**  : "Own Used, Telecommunication"

---

## Components - Core Network Services

### 01-ISC DNS BIND 9.5
* **Operating System**  : "FreeBSD (UNIX)"
* **Application**       : "BIND 9.5"
* **Type**              : "Authoratative and Caching DNS for subscriber"
* **Other**             : "MCMC Landing Page Redirection aka Website blocking using FQDN"
* **Architecture**      : "[2 Auth + 2 Caching] per cluster/site x 3 sites with Quagga Anycast services installed"

```mermaid
architecture-beta
    group dns01(cloud)[DNS Cluster 01]

    service dns11(server)[DNS Auth11] in dns01
    service dns12(server)[DNS Auth12] in dns01
    service dns13(server)[DNS Cache13] in dns01
    service dns14(server)[DNS Cache14] in dns01

    dns11:L -- R:dns13
    dns12:T -- B:dns11
    dns14:T -- B:dns13

    group dns02(cloud)[DNS Cluster 02]

    service dns21(server)[DNS Auth21] in dns02
    service dns22(server)[DNS Auth22] in dns02
    service dns23(server)[DNS Cache23] in dns02
    service dns24(server)[DNS Cache24] in dns02

    dns21:L -- R:dns23
    dns22:T -- B:dns21
    dns24:T -- B:dns23

    group dns03(cloud)[DNS Cluster 03]

    service dns31(server)[DNS Auth31] in dns03
    service dns32(server)[DNS Auth32] in dns03
    service dns33(server)[DNS Cache33] in dns03
    service dns34(server)[DNS Cache34] in dns03

    dns31:L -- R:dns33
    dns32:T -- B:dns31
    dns34:T -- B:dns33

    dns11:R -- L:dns23
    dns21:R -- L:dns33
```

---

### 02-ISC DHCP
* **Operating System**  : "Centoes 6+"
* **Application**       : "ISC DHCP"
* **Type**              : "DHCP Server for Malaysia Satelite TV Box"
* **Other**             : "This DHCP solely for Astro Malaysia (Customer)"
* **Architecture**      : "2 unit DHCP for HA purposes"

```mermaid
flowchart LR
    1[DHCP1] & DHCP2 --> Switch1 & Switch2
```

---

### 03-openRadius (Front-End)
The openRadius is the RADIUS server for authentication, authorization, and accounting (AAA) for the FTTO/FTTH network. It is used to authenticate users who access the FTTO/FTTH network with proper configure PPPoE speed profile. 

---

### 04-mySQL Database (Back-End)
The mySQL is the database server for the FTTO/FTTH network. It is used to store the user information, the PPPoE speed profile, and the accounting information. 

Running on Centos with clustering and replication in place.

---

### 05-Cacti Network Monitoring Service (NMS)
The Cacti is the network monitoring service for the FTTO/FTTH network, as well as entire Network Routers/Switches/Edge Routers. It is used to monitor the network devices and the network services. 

Customization were required to enable full monitoring of server hardware, OS Services, Network port utilizations, and more.

---

### Locations

TIME dotcom Malaysia HQ, Shah Alam, Selangor, Malaysia.

### Project Complexity

* &   Easy
* &&  Medium  
* &&& Hard    <---

### Summary
The company initial core network services entirely running on open-source without commercial support. Various design, implementation and inclusive managing the services up time been apply over 4 years. Result archieving service **availability of 99.995%**.

* Year 2013 without any Ai to debug configuration files and services. Entirely rely on Google and community support. Hereby I take the opportunity to thanks all the open-source contributor.