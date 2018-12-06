# Advanced Statisics
_module notes for CACM module: Advanced Statistics_

## Permuation,  Combinations & Probability

### Mutplication of Choices
Finding the number of possibilities given $n$ sets of $m$  different choices use **mutiplication of choices**:
$$
c = m \times m
$$
where $c$ is the total number of choices.

### Permuation & Combinations
Comparing the different operations:
| Operation | What does it compute |
| --- | --- |
| Permutation, $n^m$ | Permuatation with replacement |
| Permutation, $_nP^r$ | Permutation without replacment. Ordering does matter |
| Combination, $_nC^r$| Permuatation without replacment. Ordering does **not** matter |

### Probability
The probability of a given event E is computed as follows:
$$
P(E) = \frac{n(E)}{n(S)}
$$
where $n(E)$ and $n(S)$ is the number out outcomes of event $E$ and $S$ respectively.


### Mutually Exclusive and Independent Events
![mutually-exclusive-vs-independent-event-thumbnail.jpg](https://keydifferences.com/wp-content/uploads/2016/05/mutually-exclusive-vs-independent-event-thumbnail.jpg)
If $A$ and $B$ are **mutually exclusive**,
$$
P(A \cap B) = 0 
$$

If $A$ and $B$ are **independent**:
$$
P(A \cap B) = P(A) \times P(B)
$$

### Conditional Probability
The conditional probability of $A$ given $B$ is as follows:
$$
P(A | B) = \frac{P(A \cap B)}{P(B)}
$$

### Discrete Porbability Distribution
A discerete probability distribution is a distribution of a discrete random variable

## Binomial Distribution

The binomial distribution computes the probability of a pass outcome out of 2-pass-fail possibilities for a given number of trails $n$.
Binomial Distrbution is modeled after the follows
$$
X \sim B(n,p)
$$
where $X$ is the random variable and $n$ and $p$ are parameters of the binomial distribution.

### Conditions for Binomial Distribution
Binomial distribution is a probability distribution that fulfills the 4 conditions:
- Each trail must results in only 2 outcomes
- The probability of a sucessful outcome is constant for each trail 
- the trails are independent of each other
- the are a finite number of trails

### Computing Probability using Binomial Distribution
The probability of event $x$ happening in a binomial distribution is computed as follows:
$$
P(X=x) = {n \choose x}p^x(1-p)^{n-x}
$$
where:
| Variable | What it represents |
| --- | --- |
| $x$ | Event we are calculating the event for |
| $n$ | Number of trails conducted |
| $p$ | Probabilty of the one trial 

### Expected Value and Variance for Binomal Distribution
Computing the average $E(x)$ of a binomial distribution:
$$
E(x) = np
$$

Computing the variance $var(x)$ of a binomial distribution:
$$
var(x) = np(p-1)
$$
> Standard deviation can be computed as a square root of variance: $\sqrt{var(x)}$
> 

## Poisson Distribution
A **Poisson distribution** is a probability distribution that describes the number of times an event will occur randomly in a given period of time or amount of space (area, volume, weight, distance)

A discrete random variable follows a Possion Distribution is denoted by:
$$
X \sim P(\lambda)
$$

### Conditions and Examples for Poission Distribution
Conditions for Poisson distribution:
- The events must occur randomly
- The probability that an event will occur in a certain interval of time or space is proportional to the size of the interval
- The events foccuring in one unit of time is independent of the events in othe units of time

 Examples of the uses for Probability distribution:
 - the number of emails recieived by a company in a given day.
 - the number of visitors to a website in a given week.
 - the number of flaws in a given length of material.


### Computing Probability using Binomial Distribution
The probability of event $x$ in a computed as:
$$
P_0(X=x) = {\frac{\lambda^xe^{-\lambda}}{x!}}
$$

### Expected Value and Variance for Possion Distribution
The mean or expected value $E(x)$ of possion distribution is:
$$
E(x) = \lambda
$$

The variance $var(x)$ is:
$$
var(x) = \lambda
$$

### Probability of two Independent Possion Distributions
Additive property of poisson distribution allows us add two indepedent discrete poisson random variables $X$ and $Y$:
$$
X \sim P_0(\lambda_1)
$$

$$
Y \sim P_0(\lambda_2)
$$
$$ 
(X+Y) \sim P_0(\lambda_1 + \lambda_2)
$$

## Approximating Binomial Distribution with Poisson Distribution
For $X$, a binomial random variable such that:
$$
X \sim B(n, p)
$$
and $n \ge 50$ and p $np < 5$,

$X$ can be apprimated with a Poisson Distribution with
$$
X \sim P_o(\lambda)
$$
where $\lambda$ is defined as follows:
$$
\lambda = n \times p 
$$


## Normal Distribution
The normal distribution is a continuous probability distribution.

A continous random variable that follows a normal distribution is denoted as:
$$
X \sim N(\mu, \sigma^2)
$$
where $\mu$ is the mean, and $\sigma^2$ is the standard deviation.

### Standard/Unit Normal Distribution
The Standard/Unit normal distribution is a normal distribution with mean = 0, and variance = 1:
$$
Z \sim N(0, 1)
$$

### Computing Probability for Normal Distribution

To compute the probability of $X$ which follows a normal distribution:
1. Convert $X$ into a unit normal distribution $Z$ by subtracting mean $\mu$ and dividing by standard deviation $\sigma$
2. Lookup $Z$ value in normal distrbution table to get $P(Z<...)$
3. Manipluate result as per question requirements

### Continuity Correction
When approximating discrete distribution from a normal distribution, we need to apply **continuity correction** by appying $\pm0.5$:
For discrete probability:
$$
P(x=1)
$$ 
into continuous probability:
$$
P((1-0.5)< x < (1+0.5))
= P(0.5<x<1.5)
$$ 

For converting $=,\leq,\geq$, increase the range of values by $+0.5$
For converting $<,>$ decrease the range of values by $-0.5$

Examples of converting discrete to continuous:
| Discrete |  Continuous |
| --- | --- |
| $P(X \geq 4)$ | $P(X>3.5)$ |
| $P(X \leq 4)$ | $P(X < 4.5)$ |
| $P(X > 4)$ | $P(X>4.5)$ |
| $P(X < 4)$ | $P(X < 3.5)$ |

### Approximating Binomial Distribution using Normal Distribution
To approximate normal dist to binomial dist, the following conditions must be met:

For
$$
X \sim B(n, p)
$$
1. n is sufficiently large
    - check $np > 5$
2. p is close enough to 0.
    - check $nq > 5$ where $q = (p-1)$
> Use the approximation when $n$ is large and computation of the probability using binomial distribution is  tedious.

The binomial distribution can be approximated with a normal distribtuion as follows:
$$
X \sim N(np, npq)
$$
Where $q = (p-1)$

> Apply continuity correction before using normal distribution to approximate binomial distributions

### Approximating Poisson Disribution using Normal Distribution
We can use the normal distribution to approximate a possion distribution if the 
following conditions are met:
For

$$
X \sim P_0(\lambda)
$$

$\lambda$ is suffciently larger than $\sqrt{\lambda}$ which is taken that:
$$
\lambda > 10
$$

The possion distribution may be approximated by the normal distribution as follows:
$$
X \sim N(\lambda, \lambda)
$$

> Apply continuity correction before using normal distribution to approximate possion distribution

## Sampling and Sampling Distribution
### Population and Sample
A **population** is the entire group of entities that we may collect data from.

A **sample** is a smaller group of entities selected from the population. The sample is a subset of the population

- Numerical measurements collected from a population are know as **parameters**
- Numerical measurements collected from a sample are known as **statistics**

> Statistics are often used to infer/estimate population paramters

Differences in Notation between parameters and statistics
| Thing | Parameters Notation | Statistics Notation |
| --- | --- | --- |
| Size | $N$ | $n$ |
| Mean | $\mu$ | $\bar{x}$ |
| Standard Devaition | $\sigma$ | $s$ 
| Variance | $\sigma^{2}$ | $s^{2}$ |

Differences in computation of variance:
| Thing | Parameter Notation | Statistics Notation |
| --- | --- | --- |
| Variance | $\frac{\sum{(x-\mu)^{2}}}{N}$ | $\frac{\sum{(x-\bar{x})^{2}}}{n-1}$

### Sampling Methods
**Random sampling** is a technique where a sample is selected from a poulation entirely by chance and each entity in the population has a known probability of being selected.

> Random sampling reduces the possbility _bias_ in the sampling process

Random sampling methods
1. **Simple Random Sampling** is a random sampling method such that each entitiy in the population will have an _equal chance_ of being included in the sample 
2. **Stratified Random Sampling** is random sampling for each group. A quota is assigned for each group and a random sample is taken for the groups's quota. 

The quota is computed as follows
$$
n_q = \frac{n_g}{N} \times n
$$
where $n_q$ is the size of the quota, $n_g$ is the size of the group.

>Sample Statisitics are random variables.

### Sampling Distribution
**Sampling Distribution** is the probability distribution of the sample statistic. For example for the sample statistic, _sample mean_ the _sampling distribution_ is the probability distribution of all possibile values the sample mean can take when a sample of size $n$ is taken from a particular population

For the sampling distribution of the sample mean $\bar{x}$ of **infinite populations, finite population with replacement or very large populations**:
1. The average of the sample means $E(\bar{x})$ is the actual population mean $\mu$:
$$
E(\bar{x}) = \mu
$$

2. The variance of the sample means, $Var(\bar{x})$ is $\frac{1}{n}$ of the population variance $\sigma^{2}$
$$
Var(\bar{x}) = \frac{\sigma^2}{n}
$$


When sampling of sample size $n$ is done on a finite populate of size $N$ _without replacement_ and $n$ is not a very small fraction of $N$, then the variance $Var(\bar{x})$ is computed with correction as folllows:
$$
Var(\bar{x})=\frac{\sigma^{2}}{n}\times\frac{N-n}{N-1}
$$
> When the $\frac{N-n}{N-1}$ is close to $1$ $(>0.9)$, variance correction is no longer necessary.


### Sampling Errors
When using sampling statistics to estimate population parameters, there are **sampling errors** between the estimate and the actual value

_Standard Deviation of the Sampling Mean_ is known as the **Standard Error of the Mean** and computed as follows:
$$
SE = \frac{s}{\sqrt{n}}
$$
where $s$ is the standard  deviation of the sample means, $n$ is number of sample means estimated.

Since the standard deviation of the sampling mean is derived from  to the variance of the sampling mean, correction is also required if necessary
$$
SE = \frac{s}{\sqrt{n}} \times \sqrt{\frac{N-n}{N-1}}
$$


### Central Limit Therom
For a random variable $x$ taken from a normal distribution, the sample distribution of the sample mean $\bar{x}$ also follows a normal distribution.

For a random varable $x$ taken from **any** distribution, the sample distribution of the sample mean $\bar{x}$ is a normally distributed if the number of  samples taken is large ($>30$) by the central limit theorem


# Common Test Ends Here

- ---

## Estimation
**Estimation** is the process of using a sample statistic to estimate the population parameter.

### Point Estimation
A **Point Estimate** is a _single and specific_ estimate of a parameter 

If $\hat{\theta}$ is an estimator of $\theta$, and the following hold true
$$
E(\hat{\theta}) = \theta
$$
then $\hat{\theta}$ is an **unbiased estimate** of $\theta$

#### Estimating Mean and Variance
The unbiased estimate of $\mu$ is the sample mean $\bar{x}$ as:
$$
E(\bar{x}) = \mu
$$  

The unbiased estimate of $\sigma^2$ is the sample variance $S^2$ as:
$$
E(S^2) = \sigma^2
$$  

### Confidence Interval
An **Interval Estimate** is the interval within which we would expected to find the actual value of the paramater, with reference to the estimate.

**Confidence level** is the degree (as a percentage) that we are confident that the parameter lies within the interval.

**Confidence Interval** is simply an interval estimate associated with a specific confidence.

The confidence for $\theta$ to be between the interval between $a$ and $b$ is 90%
$$
P(a \le \theta \le b) = 0.9
$$

### Confidence Interval for Mean
Provided that any of the following conditions hold
- The sample is taken from a normal distribution with known variance $\sigma^2$
- Any population with $n > 30$ with know variance $\sigma^2$ (Central limit therom)
> These conditions ensure that the probability distribution of the sample mean $\bar{x}$ is a normal distribution.

Then confidence interval for estimating the population mean $\mu$ with sample mean $\bar{x}$ is derieved from the standard error of the mean $SE$:
$$
(\bar{x} - \beta \times SE) < \mu < (x+ \beta \times SE)
$$

where $SE$ is given as follows
$$
SE = \frac{\sigma}{\sqrt{n}}
$$
> If the population standard deviation $\sigma$ is not known,  an estimator \hat{\sigma} can be used.

$\beta$ is used to control the _confidence_ part of the confidence interval:
| $\beta$ value | Confidence % |
| --- | --- |
| 1.645 | 90% |
| 1.96 | 95% |
| 2.576 | 99%

The 95% confidence interval for the estimating the population mean $\mu$ is given by:
$$
\bar{x} \pm 1.96 \times SE
$$

### Maximum Error of the Estimate Error of the Mean
how is Z derieved?
what is the difference between confidence interval and max error of estimate of mean?