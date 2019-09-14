Public Class Subcategory
    Private _name As String
    Private _id As Integer

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

End Class
