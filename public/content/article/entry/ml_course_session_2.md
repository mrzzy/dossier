# Session II - Deep Learning with Keras

## What is Deep Learning
**Artifical Intellegence** any technique that enables computers to mimic human behavour
**Machine Learning** is the ability to learn with being explicitly programmed
**Deep Learning** learn the underlying features of a task using neural networks.

DL is a subset of ML which is in and of itself a subset of AI.

### Why Deep Learning
Feature engineering is simplfying the problem for the machine machine model.
Suppose you clock and you would like to recongnise the the time using machine learning model, and you would like to feed in a image of the clock and get the time of the clock. However the model does not do well, what do you do? On way is to do feature engineering: we find a way to simplify the problem for the model: we could find a way to detect the positions of the hands on the clock and feed it into the model. This is a form of feature  engineering.

Feature engineering less important with DL as DL can automatically learn the relevant features from the data through multiple layers.

>For example, instead of converting text to vectors using a specific encoding method, such as one hot encoding, A DL neural network can automatically find an encoding method on its own. Examples of automatic encodings for text are the word2vec and GLoVe word to vector encodings.

### The Neural Network
The (most basic) NN is comprised of neurons or perceptrons which each works as follows in a process called **foward propagation**:
![neron/perceptron](https://cdn-images-1.medium.com/max/1600/1*n6sJ4yZQzwKL9wnF5wnVNg.png)
1. The neuron gets a number of inputs
2. The neuron multiplies the input with a certain weight (each weight has its own input)
3. The neuron sums up all the multiplications
4. The neuron passes the sum through a step or **activation** function and thus produces it output
>  Activation functions is a function that defines output of the neuron. The activation function introduce nonlinearities into the network. Since the world is nonlinear, this helps the neural network model real world phenomina.

Placing multiple nerons together, and stacking them up like layers of lasagne, we build what is called a **neural network**:
![Nerual Network](https://cdn-images-1.medium.com/max/1200/1*RGV6Bb3ChmVWsA8Q6Qth6Q.png)
Above, we have a simple NN. Each circle represents a single neuron.

During training, using **backpropagation**, the weights network are adjusted to make the network to reduce computed cost and thus better at the task over time.
