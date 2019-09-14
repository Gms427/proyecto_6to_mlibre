Public Class Category

    Private _name As String
    Private _id As Integer
    Private _subcategories As List(Of Subcategory)

    Public Sub New(id As Integer, name As String)
        _id = id
        _name = name
    End Sub

    Public Property Name As String
        Get
            Return _name
        End Get
        Set(value As String)
            _name = value
        End Set
    End Property

    Public Property Id As Integer
        Get
            Return _id
        End Get
        Set(value As Integer)
            _id = value
        End Set
    End Property

    Public Property Subcategories As List(Of Subcategory)
        Get
            Return _subcategories
        End Get
        Set(value As List(Of Subcategory))
            _subcategories = value
        End Set
    End Property

End Class
