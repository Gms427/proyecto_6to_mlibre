Public Class PublicationController
    Private PublicationDAL As PublicationDAL = New PublicationDAL()

    Public Function GetPublication()

        Dim publications As List(Of Publication) = PublicationDAL.GetPublications()

        Return publications
    End Function

    Public Function GetReports()

        Dim reports As List(Of Report) = PublicationDAL.GetReports()

        Return reports
    End Function

End Class
