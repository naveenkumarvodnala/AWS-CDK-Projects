# AWS CDK Projects – Infrastructure as Code & CI/CD Automation

A collection of AWS Cloud Development Kit (CDK) and DevOps projects focused on infrastructure automation, application deployment, CI/CD workflows, and cloud-based application architecture.

This repository brings together application components, deployment configurations, automation scripts, and infrastructure-related project work in one place.

## Project Overview

The goal of this repository is to explore and implement AWS infrastructure and application delivery workflows using Infrastructure as Code (IaC) and DevOps practices.

The repository is organized into separate components for frontend development, backend services, CI/CD automation, GitHub workflows, reverse-proxy configuration, and deployment scripts.

## Repository Structure

```text
AWS-CDK-Projects/
│
├── .github/
│   └── workflows/
│       └── GitHub Actions workflow definitions
│
├── CICD/
│   └── CI/CD pipeline configurations
│
├── backend/
│   └── Backend application components
│
├── frontend/
│   └── Frontend application components
│
├── github/
│   └── GitHub-related configurations
│
├── reverse-proxy/
│   └── Reverse-proxy configuration
│
├── scripts/
│   └── Automation and deployment scripts
│
├── appspec.yml
│   └── AWS CodeDeploy application specification
│
└── .gitignore
```

## Technologies and Tools

| Category | Technology |
|---|---|
| Cloud Platform | Amazon Web Services (AWS) |
| Infrastructure as Code | AWS Cloud Development Kit (CDK) |
| CI/CD Automation | GitHub Actions |
| Source Control | Git, GitHub |
| Application Components | Frontend, Backend |
| Deployment Configuration | AWS CodeDeploy AppSpec |
| Proxy Configuration | Reverse Proxy |
| Automation | Shell / deployment scripts |

*The exact programming languages, CDK constructs, and AWS services depend on the individual project implementations.*

## Repository Components

### 1. Infrastructure as Code – AWS CDK

AWS CDK allows cloud infrastructure to be defined using programming languages instead of manually creating every resource through the AWS Management Console.

This repository is intended to organize infrastructure-related project implementations and deployment configurations.

Key concepts:

- Infrastructure as Code.
- Reusable infrastructure definitions.
- Automated resource provisioning.
- Version-controlled infrastructure changes.
- Repeatable deployment workflows.

### 2. Frontend Application

The `frontend/` directory contains the frontend application components.

This section is intended for the user-facing application and its associated configuration.

### 3. Backend Application

The `backend/` directory contains backend application components.

This section is intended for application-side processing, API functionality, and backend configuration.

### 4. CI/CD Automation

The `CICD/` directory contains CI/CD-related project configurations.

The `.github/workflows/` directory contains GitHub Actions workflow definitions.

CI/CD concepts covered by this repository include:

- Automated workflow execution.
- Source-control-based automation.
- Build and deployment workflow organization.
- Repeatable application delivery.

### 5. GitHub Configuration

The `github/` directory contains GitHub-related configuration files and project resources.

### 6. Reverse Proxy

The `reverse-proxy/` directory contains reverse-proxy-related configuration.

A reverse proxy can sit in front of application services and route incoming requests to the appropriate backend.

### 7. Automation Scripts

The `scripts/` directory contains scripts intended to support automation and deployment activities.

### 8. AWS CodeDeploy Configuration

The root-level `appspec.yml` is an AWS CodeDeploy application specification file.

An AppSpec file defines deployment instructions for CodeDeploy, including the deployment lifecycle hooks and the files or scripts involved in a deployment.

## Getting Started

### Prerequisites

Install or configure the tools required by the individual project:

- AWS account with appropriate permissions.
- AWS CLI.
- Node.js and npm, if required by the application or CDK project.
- AWS CDK CLI.
- Git.
- GitHub account.
- Docker, if required by the project.
- AWS credentials configured locally or through an approved identity provider.

### Clone the Repository

```bash
git clone https://github.com/naveenkumarvodnala/AWS-CDK-Projects.git

cd AWS-CDK-Projects
```

### Configure AWS CLI

```bash
aws configure
```

Verify the configured identity:

```bash
aws sts get-caller-identity
```

### Install AWS CDK CLI

```bash
npm install -g aws-cdk
```

Verify the installation:

```bash
cdk --version
```

### CDK Deployment Workflow

For a directory containing an actual CDK application, use the following workflow from that application's directory:

```bash
npm install
```

Check the infrastructure changes:

```bash
cdk synth
```

Compare the proposed changes with the deployed environment:

```bash
cdk diff
```

Bootstrap the target AWS environment if it has not already been bootstrapped:

```bash
cdk bootstrap
```

Deploy the CDK stack:

```bash
cdk deploy
```

**Note:** These are standard CDK commands. Run them only from a directory containing a valid CDK application and its configuration.

## CI/CD Workflow

The repository includes GitHub Actions workflow and CI/CD-related directories.

A typical application delivery workflow can be organized as follows:

```text
Developer
    |
    v
Git Push / Pull Request
    |
    v
GitHub Repository
    |
    v
GitHub Actions
    |
    v
Build and Validation
    |
    v
Deployment Workflow
    |
    v
AWS Environment
```

The exact workflow stages, AWS authentication method, deployment target, and triggers should be documented according to the actual workflow files.

## AWS CodeDeploy

The repository includes an `appspec.yml` file for deployment configuration.

A typical CodeDeploy deployment involves:

1. Preparing an application revision.
2. Defining deployment instructions in `appspec.yml`.
3. Configuring lifecycle event hooks where required.
4. Deploying the revision to the configured deployment environment.
5. Verifying the application after deployment.

## DevOps Concepts Demonstrated

- Infrastructure as Code using AWS CDK.
- Cloud infrastructure automation.
- Git and GitHub version control.
- GitHub Actions workflow automation.
- CI/CD pipeline organization.
- Application deployment configuration.
- AWS CodeDeploy AppSpec.
- Frontend and backend project organization.
- Reverse-proxy configuration.
- Shell-based automation.

## Learning Outcomes

This repository provides practical exposure to organizing cloud and application projects around DevOps principles.

It helps build understanding of:

- Managing infrastructure through code.
- Organizing application and deployment components.
- Automating workflows using GitHub Actions.
- Understanding application deployment configurations.
- Working with AWS cloud deployment tooling.
- Maintaining project configurations in version control.

## Author

**Naveenkumar Vodnala**

- GitHub: https://github.com/naveenkumarvodnala
- LinkedIn: https://www.linkedin.com/in/naveenkumar-vodnala/

## Repository

[ AWS-CDK-Projects – GitHub Repository](https://github.com/naveenkumarvodnala/AWS-CDK-Projects)
