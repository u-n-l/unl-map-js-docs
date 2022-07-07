---
title: Authentication
description: Generating the api key and vpm id necessary to initiatlise the map.
contentType: example
language:
  - JavaScript
navOrder: 2
layout: page # use the layout page
hideFeedback: true # hide feedback from page
products:
  - UNL Map JS
---

## User Sign-up

A user need to sign up to [UNL studio](https://studio.unl.global/) to configure access keys which will be used to initialize the SDK. Follow the next steps to obtain access keys.

## Creating a Virtual Private Maps(VPM)

Once sign-up process is complete, user can Login to UNL studio using the link [UNL Studio](https://studio.unl.global)

The next step is to create your virtual private map (vpms) from the Virtual Private map page and clicking on 'Create a VPM' to create your VPM. Alternatively, you can directly visit the page using the link [https://studio.unl.global/vpms](https://studio.unl.global/vpms) and click on `Create A New VPM` to create & name your map.

<img src="https://developer.unl.global/img/sdk/create-vpm-1.gif">

Access to the UNL SDK is managed via service accounts and api-keys. A service account is a special type of account intended to represent a non-human user that needs to access data in a VPM

## Create a service account and api key

Select the `Service Accounts` option from the left side menu or visit [https://studio.unl.global/serviceAccounts](https://studio.unl.global/serviceAccounts) and click on `Create New Service Account` to create & name your service account.

<img src="https://developer.unl.global/img/sdk/create-sa.gif"/>

To genereate an API key, select `Create New Api Key` from the service account's page. You can copy & manage API keys from a service account's settings page.

<img src="https://developer.unl.global/img/sdk/create-api-key.gif"/>

## Connect Project to Service Account

The next step is to connect the service account to your Virtual private map. Click on the **[...]** to select **VPM settings** from the **VPM list** page. On the VPM settings page, add your service account by clicking on `Add service account`.

<img src="https://developer.unl.global/img/sdk/connect-sa.gif"/>

## Add Contributor Rights

The last step is to give the service account contributor rights in order to allow adding data to the project. From the **VPM settings** page, open the dropdown from the `ROLE` column correspoding to your service account and select `Can Contribute`.

<img src="https://developer.unl.global/img/sdk/rights.gif"/>

## Copy the api key and vpm id created above

Now that a VPM, service account, and api are configured it is possible to initialise the Unl Map SDK, by copying the api key associated with the service account and the vpm id that your service account has access to.
