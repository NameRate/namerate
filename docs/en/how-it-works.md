# **How NameRate Works**

The foundation of NameRate is an **uninterpretable** machine learning model that is continuously retrained on additional data. When a new test model becomes stable, it replaces the main one, and training continues on the new test model.

## Where the Data Comes From

### **1. Platforms for Selling Nicknames**

Open data from resources where nicknames and domains are sold.

> Today, the main sources are:
>
> - **[Fragment](https://fragment.com/?filter=auction)** — a platform integrated with TON where users buy and sell nicknames.
> - **[GetGems](https://getgems.io/collection/EQCA14o1-VWhS2efqoh_9M1b_A9DtKTuoqfmkn83AbJzwnPi)** — an NFT marketplace for trading nicknames and other digital assets.
>

**What is Analyzed?**

- Successful transactions: nicknames that were sold, their prices, and the speed of sale.
- Unsuccessful listings: nicknames that did not find a buyer, and the reasons for that (price, low demand, etc.).
- Popularity of themes: in-demand categories such as business, crypto, or names.

### **2. Market Trends**

NameRate analyzes external data related to the popularity of words and phrases. For this, the following are used:

- **Search Engine Auctions:** statistics used for placing contextual advertisements.
- **Online Sources:** popular words in online publications, frequently mentioned phrases.
- **Social Networks:** trends and key topics relevant on Telegram, Twitter, and other platforms.
- **Pop Culture and Literature:** words and expressions that frequently appear in pop culture, books, or films.

### **3. User Preferences via NameRateBot**

Despite the large volume of indirect training data, **there is still insufficient sales data** for proper algorithm validation.

Therefore, we launched the Telegram application [@NameRateBot](https://t.me/NameRateBot/namerate) to gather user opinions. For us, this is a **very valuable source of knowledge** that we use to verify the quality of our appraisals. And for users, it is a great way to receive our tokens.

A Tinder-like mechanic has been added:

- Users swipe nicknames to the right (like) or to the left (dislike)
- Each swipe helps validate the model's weights
- Users receive a reward in $NMRT

!!! annotate note ""
    Currently, only the swipe mechanic has been added, but to improve the next test model we will add others, such as
    
    - A mechanic with user input (1)
    - A mechanic with pairwise comparison (2)

1. Captures what comes to users' minds  
2. Improves response accuracy

??? info "For Fraud Protection"
      - **Swipe Limit:** no more than 10 swipes per day to prevent manipulation
      - **Analysis of Anomalous Patterns:** if a user rates nicknames too quickly or erratically, such data is excluded
---
## Algorithm Principles

NameRate is an **uninterpretable** ML model. This means that it is not possible to precisely determine why the algorithm assigned a particular appraisal. Below, we provide an **example** that demonstrates **how the main principles and the most influential features might work**.

!!! info ""
    **Features and their weights change** with each new model version.
!!! info annotate ""
    The current algorithm uses all the features listed below, but is not limited to them. **The interpretation of the features is provided for reference only** (1)

1. Our prototype worked in a similar way.

### Example
Some features with a high impact:

**Nickname Length**

!!! example "The shorter, the better:" 
    `@root` or `@final` are more valuable than `@longnickname123`

**Non-alphabetic Characters:** such as numbers or underscores

!!! example "Numbers in nicknames decrease value:" 

    `@josephine` is better than `@josephine12345`

!!! note ""
    However, numbers in a nickname increase its weight if they add meaning (for example, `@peer2peer` or `@season4`)

**Repetitions**
!!! example "In general, repeated characters reduce value:" 
    `@eeenemy` loses value due to excessive repetitions. Exception – repetitions as part of a meaningful word

!!! note ""
    Interestingly, repetitions of meaningful words have little impact on the appraisal

**Semantic Load**
!!! example "Real words and phrases are valued higher" 
    `@space_jaguar` is better than `@qazws_jaguar`

**Popularity:** Trends in search, literature, or social networks
!!! example "More popular = better" 
    `@blockchain`, `@meta_boom`, or `@music` are appraised higher due to their popularity

!!! note ""
    Trends are divided into static and dynamic, as well as by their sources.
   
**Theme:** The value of a theme is determined by trends and the advertising search auction.
!!! example "Dictionaries" 
    We create and update thematic dictionaries to determine which categories a nickname belongs to.
    
    For example: business, cryptocurrencies, pop culture, names, etc. Nesting is provided – level 1 dictionaries contain level 2 dictionaries, and so on.

!!! note "An unpopular nickname can belong to a popular theme and vice versa"
    Example: `@zkevmbidge` is hardly mentioned on the internet – this decreases its value. However, it belongs to a high-value theme – blockchain – which increases its appraisal.

**Geographic References:** They have both positive and negative impacts.
!!! example ""
    `@NYC_blah` or `@London_example` will receive additional influence from geo-features

This is a list of the most obvious and understandable features with high impact. In addition to these, there are poorly interpretable features (such as sales history), unstable features, and those we are not ready to share. The current calculation does not take into account the conclusions listed above, despite their obviousness. You help us greatly when you honestly vote in the app for the names you consider good. We intentionally do not provide criteria for a "good" nickname so that you respond based on your feelings.
