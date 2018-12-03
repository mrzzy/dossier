# CACM Notes
_module notes for CMCA_

## Permuation Combination Review
Finding the number of possibilities given $n$ sets of $m$  different choices use **mutiplication of choices**

Comparing the different operations:
| Operation | What does it compute |
| --- | --- |
| Permutation, $n^m$ | Permuatation with replacement |
| Permutation, $_nP^r$ | Permutation without replacment. Ordering does matter |
| Combination, $_nC^r$| Permuatation without replacment. Ordering does **not** matter |

## Discrete Random Variable
A discerete probability distribution is a distribution of a discrete random variable

### Binomial Distribution
Binomial distribution is a probability distributioon that fulfills the 4 conditions:
- Each trail must results in only 2 outcomes
- The probability of a sucessful outcome is constant for each trail 
- the trails are independent of each other
- the are a finite number of trails

Binomial Distrbution is modeled after the follows
$$
X \sim B(n,p)
$$
where $X$ is the random variable and $n$ and $p$ are parameters of the binomial distribution

The probability of event $x$ happening in a binomial distribution is computed as follows:
$$
P(X=x) = {n \choose x}p^n(p-1)^n-x
$$
where:
| Variable | What it represents |
| --- | --- |
| $x$ | Event we are calculating the event for |
| $n$ | Number of trails conducted |
| $p$ | Probabilty of the one trial 

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

### Poisson Distribution
A **Poisson distribution** is a probability distribution that describes the number of times an event will occur randomly in a given interval of time or a given space (area, volume, weight, distance)

Conditions for Poisson distribution:
- The events must occur randomly
- The probability that an event will occur in a certain interval of time or space is proportional to the size of the interval
- The events foccuring in one unit of time is independent of the events in othe units of time

> Examples of the uses for Probability distribution:
> - the number of emails recieived by a company in a given day.
> - the number of visitors to a website in a given week.
> - the number of flaws in a given length of material.


A discrete random variable follows a random variable is denoted by:
$$
X \sim P(\lambda)
$$

The probability of event $x$ in a computed as:
$$
P_0(X=x) = {\frac{\lambda^xe^{-\lambda}}{x!}}
$$


The mean or expected value $E(x)$ of possion distribution is:
$$
E(x) = \lambda
$$

The variance $var(x)$ is:
$$
var(x) = \lambda
$$


Additive property of poisson distribution allows us add two indepedent discrete random variables $X$ and $Y$:
$$
X \sim P_0(\lambda_1)
$$

$$
Y \sim P_0(\lambda_2)
$$

The probability distribution of event $X$ and $Y$ is computed as follows:
$$ 
(X+Y) \sim P_0(\lambda_1 + \lambda_2)
$$

## Normal Dist Approx Discerete Dist
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

### Approximation from Binomial Distribution
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

### Approximation from Poisson Distribution
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

A **sample** is a smaller group of entities selected from the population. The sample is a subset of the populatio n

Numerical meansurements colleeted from a population are know as **parameters**

Numerical meansurements computed from a sample are known as **statistics**

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

## Sampling Methods
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

Sample Statisitics are random variables.
**Sampling Distribution** is the probability distribution of the sample statistic. For example for the sample statistic, _sample mean_ the _sampling distribution_ is the probability distribution of all possibile values the sample mean can take when a sample of size $n$ is taken from a particular population

The theorem on sampling distribution of sample mean states that when a _very large_ number of samples (each of size $n$) are repeated and independently drawn from a population:
1. The average of the sample means $E(\bar{x})$ collected will be very close to the actual population mean $\mu$
2. The variance of the sample means, $Var(\bar{x})$ is $\frac{1}{n}$ of the population variance $\sigma^{2}$
> The theorem only holds on the following conditions:
> 1. an infinite population
> 2. a very large finite population
> 3. a finite population with replacement

When sampling of sample size $n$ is done on a finite populate of size $N$ _without replacement_ and is not a very small fraction of $N$, then the variance $Var(\bar{x})$ is computed with correction as folllows:
$$
Var(\bar{x})=\frac{\sigma^{2}}{n}\times\frac{N-n}{N-1}
$$
> When the $\frac{N-n}{N-1}$ is close to $1$ $(>0.9)$, variance correction is no longer necessary.


## Sampling Errors
When using sampling statistics to estimate population parameters, there are **sampling errors** between the estimate and the actual value

_Standard Deviation of the Sampling Mean_ is known as the **Standard Error of the Mean** and computed as follows:
$$
SE = \frac{s}{\sqrt{n}}
$$
where $s$ is the standard  deviation of the sample means, $n$ is number of sample means estimated.

Since the standard deviation of the sampling mean is also related to the variance of the sampling mean, correction is also required if necessary
$$
SE = \frac{s}{\sqrt{n}} \times \sqrt{\frac{N-n}{N-1}}
$$



## Assuming Normal Dist + Central Limit Theorem
For a random variable $x$ taken from a normal distribution, the sample distribution of the sample mean $\bar{x}$ also follows a normal distribution.

For a random varable $x$, the sample distribution of the sample mean $\bar{x}$ is a normally distributed if the number of  samples taken is large ($>30$) by the central limit theoremf


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
