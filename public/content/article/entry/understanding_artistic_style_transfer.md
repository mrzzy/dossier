# Understanding Artistic Style transfer
Explaining how Pastiche Works under the hood.


## Abstract 
The generation of the styled image (Pastiche) will be completed using the Artistic Style Transfer algorithm outline in the research paper A Neural Algorithm of Artistic Style (Gatys, L. A., Ecker, A. S., & Bethge, M. 2015). The paper outlines a method to compute perform artistic style transfer from a style image to a content image with a convolutional  neural network. A brief summary of the methodology is detailed below.
![content_style.png](/content/article/attachments/9a251929.png)

![total_loss.png](/content/article/attachments/d4e731b6.png)
 
From 3000 feet, the algorithm is fundamentally an optimisation problem between content and style, which are represented by content and style loss functions respectively. and are the weights given to content and style, which allows use to control the trade off between content and style. By minimising the combined style and content loss, we end up with Pastiche that is a cross between the two .

## Style Transfer in Detail
A pre trained convolutional neural network (CNN) is used to extract high level features from the content and style images. The CNN used is trained to classify images: to recognise,  given an image of an elephant, that there an elephant in the picture. Due to the training, the layers of the CNN are able to extract and discern high level features in the image. We can take  these layers from the network to extract high level features from the images, which we will then use to compute content and style loss.

### Content Loss
![content_loss.png](/content/article/attachments/be52edab.png)

Content loss measures how much the Pastiche image has changed relative to the content image.  Therefore, this loss should be minimised so that the content of the Pastiche resembles that of the content image. It is defined as the sum of the squared difference between the high level features of the content image and that of the Pastiche.

### Style Loss
![style_loss.png](/content/article/attachments/0dcaa616.png)

Style Loss measures the style difference between the style image and the Pastiche image. This too, should be minimised to ensure the adequate transference of artistic style from the style image to the Pastiche image. The style loss is an more involved computation compared to the content loss. 

![gram_matrix.png](/content/article/attachments/01f4d966.png)

Firstly, a Gram matrix is computed between the higher level features for both the style and Pastiche images for multiple layers of the CNN. The style is then computed as the sum of the squared differences between the style and Pastiche Gram Matrices for each layer of the CNN.

## Results 
![sucess.jpg](/content/article/attachments/ea9bb573.jpg)

When are content losses are minimised using a prebuilt optimization algorithm, such as Mini-Batch Gradient Descent or L-BGS, we have successfully completed artistic style transfer to create or finalised image.