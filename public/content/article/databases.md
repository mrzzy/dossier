# Databases
_module notes for DB module_

## Introduction to Databases
Databases or **DB** is an organised collection of logically related data. The data in the database can be accessed through a Database Managment System **DBMS** software.

## Relational Modeling
### Relational Vocabulary
**Relational Database** stores data as a set of relations.

A **Relation** is a named table that consist of a fixed number of columns and any number of rows. Each relation represents an entity to be stored. 
Each column of a relation represents each attribute of the entity/relation and each row or **tuple** represents examples of the entity/relation to be stored.

The **degree** of a relation is the number of attributes a relation/entity has.

Rows of a relation/entity are named **tuples**

The **cardinality** of a relation is the number of tuples a relation contains.

The **domain** refers to the set of allowable values an attribute  can have. (Think the _domain_ of a mathematical function.) Constraining the domain of the attribute to a specific set of values allows use to _prevent the insertion of incorrect data into the database_.

### Relational Properties
A relational database has the following properties
- relations has a unique name with respect to the database it belongs to 
- attributes should have a unique with respect to the relation it belongs to
- each attribute should only store one value (atomic)
- each row/tuple or a relation/entity should be unique.

### Keys
A **Key** allows us to identify specific rows/tuples of a relation, and typically consists of attributes.

| Key Type | Whats that ? |
| --- | --- |
| **Candidate Key** | is the minimal set of attributes that is able to uniquely identify a row/tuple in a relation. |
|**Composite Key** | is a key formed by a conglomerate of multiple attributes. |
|**Primary Key** | is the key choosen to identify a row/tuple in a relation. Each relation has only one primary key |
|**Foreign Key** | is a key used to identify a row/tuple in another (foreign) relation. Foreign keys can be used to model relationships between relations. |
|**Surrogate Key** | is a new attribute that is introduced to serve as a primary key. Typically, this is a unique integer identifier/ID. |
> -  When non of the attributes of a relation can act as the primary key a surragate key is introduced to assume the role of the primary key
> - Addtionally, when the primary key is a composite key composed of a large number of members, a surrogate key can be introduced to act as the primary key.

### Relational Integrity
Relational Integrity is a set of rules that ensure that the data is stored correctly.

**NULL** is nothing.

The **Entity integrity** rule states that no attribute in the primary key can be NULL
  
The **Referential Integrity** rule states that foreign keys must be either NULL or reference a primary key of another relation.


## ER Model
**Entity-Relationship (ER) modeling** represents the data terms of entities, attributes and relationships.

### Entities
**Entity** refers something that we want to model and store infomation about such as a Person, Event, Concept. The objects of an entity should share the same properties. For example, possible _entities_ for a student data system may be:
- Lecturer, Student, Module

Each object in the collection of entity object is called an **entity instance**.

> Each Entity should:
> - Have a _unqiue and meaningful_ name
> - represent a _single type of object_
  
### Attributes
**Attribute** refers to the infomation that we like to store about each entity.
For example, possible _attributes_ for a **Lecturer** entity are:
- identifier no., name, phone number, date of birth
> Each entity should only have attributes that represent that entity
> For example, a Book entity should not have attributes such as Author Name, Author ID
> because these attributes describle an author, not a book, and thus should be part of an Author Entity

There are several types of attributes:
| Type | What is it | Example |
| --- | --- | --- |
| **Simple Attribute** | a single/atomic value | Age attribute stores a single atomic integer |
| **Composite attribute** | an attribute with multiple **component** values | An Address attribute is comprised of component values: Street, Postal Code, Unit No, Blk No 
| **Multi-Value Attribute** | an attribute with multiple values | For example, an Chapters attribute can have multiple values: Chapter 1, Chapter 2, Chapter..|
| **Derieved Attribute**  | an attribute that is not stored, but instead computed (derieved) from existing stored attributes |  For example, No. of Chapters attribute can be computed from the Chapters attribute by finding the number of values in the Chapters attribute |
| **Key-Attribute** | is an attribute that is used as a key (_See section on keys_) | Book ID attribute uniquely identifies the book |

> An attribute can have mutiple types (For example, an addresses attribute can be both Composite and Multi-Valued.

### Relationships
A **relationship** is an association between two or more entities. For example when a student registers for a course, we may define an _enrollment_ relationship between the student and the course entity.

> A relationship, like entities can have attributes too.

### Degree of Relationships
The **degree** of a relationship refers to the number of entities participating in the relationship.

There are 3 most common degrees for relationships
![Unary Relationship](https://thealienadventures.files.wordpress.com/2013/03/unaryright.png)
1. **Unary Relationship** - First Degree
    a relationship between an entity and itself. Also kinow as a **recursive relationship**
![Binary relationship](https://thealienadventures.files.wordpress.com/2013/03/unarywrong.png)
2. **Binary Relationship** - Second Degree
    a monogamous relationship between two entities. Most comon type of relationship. 
![Ternary Relationship](http://www.inf.unibz.it/~franconi/teaching/2000/ct481/er-modelling/G13.gif)
3. **Ternary relationship** - Third degree
    a polygamous relationship beteen three entities. Rarity to behold.
   
### Cardinality Ratio
![Cardinality Ratio](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-chens-16.svg)
The **Cardinality Ratio** of a relationship referes the between the number of entities on one side of the relationship to another. For instance , $M$ students can enroll in $N$ classes. This makes the enrollment relationship a M:N relationship.

Common cardinality ratios include:
![One to One](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-chens-13.svg)
1. One-to-One relationship (1:1)
    For example, 1 Team manages 1 Employee. This defines a one to one managment relationship between the team and the employee
    
![One to Many](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-chens-14.svg)
2. One-to-Many relationship (1:N)
    For example,  $1$ Customer can place $N$ (multiple) Orders. This defines a one to many relationship between the Customer and the Order
    
![Many to Many](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-chens-16.svg)
3. Many-to-Many relationship (N:M)
    For example, Students may enroll in a Course, and a Student can also enroll into multiple Courses. This creates a many to many relationship between the student and the course.
    
### Participation Constraint
The **Participation constraint** defines whether the existence of one entity depends on the existence of another. For instance, a student entity should not exist without a school entity.

There are two types of participation:
![Participation Constraint](https://www.vertabelo.com/_file/blog/chen-erd-notation/chen-notation-participation-constraints.png)
1. Optional/Partial Participation - The entity may exists with or without the other entity on in the relationship 
    For example, professor entity ca  n exist without a student entity.
2. Mandatory/Total Participation - The entity only exists if the other entity exists. 
    For example, student entity only exists if the professor entity exists.
    
### Weak Entities
![Weak entity](https://www.gatevidyalay.com/wp-content/uploads/2018/05/weak-entity-set-example.png)
**Weak entities** are entities that does have the attribute(s) to identify itself in and of itself. Instead, it relies the attribute(s) from other enity(s) to form its identify itself key. 

For example, the Apartment entity relies on the Building entity to identify itself: One would not be able to find the apartment with solely the Apartment number, only together building number is given can we locate the apartment. The apartment entity is therefore  a weak entity. 

> The entity(s) that the weak entity depends on for its identity is called the **owner entity**. A weak entity can have multiple owner entities.
> Weak entities cannot exists without an owner entity(s).

### Partial Key
![Partial Key](https://practice.geeksforgeeks.org/ckeditor/images/uploads/1490790326_FIGURE%201.jpeg)
When **multiple** weak entities are identified by the same owner entity, the weak entity will have a **Partial Key**. The partial key, in combination with the the owner's primary will be used to identity the weak entity (as weak entity's primary key).

In the above example, the Payment weak entity is identified by a combination of the owner's primary key, Loan number and a partial key Payment number.

>If only **one** weak entity is identified by a owner entity, there will be no partial key. Instead, the owners primary key will become the weak entities primary key

### Subtype & Supertype
![Subtype and supertype example](http://www.siue.edu/~dbock/cmis450/4-2.gif)
A **Supertype** is an entity that contains the common attributes of its subtypes. In the above example, Employee is the supertype that encompassses the common attributes EmployeeId, DateHired and Name, that both Hourly and Salaried Employees have.

A **Subtype** is a entity that specialises a supertype by adding different attributes or relationships. In the aforementioned example, the Hourly Employees are represented by the Hourly entity. In addtional to the typical  attributes such as Name, Hourly also  adds the Wage attribute to keep track of the hourly employees current wage. Since not all employees have a wage attribute, the Hourly subtype _specialises_ the Employee supertype for Hourly employees.


### Disjoint & Overlap Subtype
![Disjoint](https://i.stack.imgur.com/TF24V.png)
A **disjoint** contraints forces an entity to be only be of one subtype at a time.
Essentially this means that in the above example, a holding can either be a book, audio book, dvd or software at a time. There can be no entity that is both a Book and a book.

> The disjoint constraint is represeted by a `d` in the middle circle thing 

![Overlap](https://i.stack.imgur.com/uc5KT.png)
The **overlap** contraint allows an entity to be of multiple subtypes at a time. 
In the above example, a student entity can be both be an Undergraduate and a Research Assitant at the same time

> The overlap constraint is represeted by a `o` in the middle circle thing 

### Total Specialisation
![Total Specialisation](https://theneuroflux.files.wordpress.com/2013/03/constraint1.jpg)
The **total specialisation** constraint forces the entity to be of at least one subtype. In the above example, the Patient entity must either of a Outpatient or Residential Patient subtype.
    
## ER Diagram
**Entity-Relationship Diagram (ERD)** allows us to prototype a database design

| Thing | What it would look like in an ERD |
| --- | --- |
| Entity | ![Entity](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-symbols-01.svg) | 
| Weak Entity | ![Weak Entity](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-symbols-02.svg)
| Attribute | ![Attributes](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-symbols-04.svg) |
| Multi-Value Attribute | ![Multi-Valued Attributes](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-symbols-08.svg) |
| Key-Attribute | ![Key Attribute](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-symbols-05.svg) |
| Partial Key-Attribute | ![Partial Key Attribute](https://www.vertabelo.com/_file/blog/chen-erd-notation/chen-notation-partial-key-attribute.png) |
| Derived-Attribute | ![Derived Attribute](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-symbols-07.svg) |
| Relationship | ![relationship](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-symbols-09.svg)
| Weak Relationship | ![weak relatsion](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-symbols-10.svg)

### Subtype & Supertype
![Subtype & Supertype](https://theneuroflux.files.wordpress.com/2013/03/subsuperrel.png)
> The disjoint constraint is represented as a `d` in the small circle while the overlap constraint is represented as an `o` in the small circle thing.
