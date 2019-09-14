<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Partial Class ReportDetails
    Inherits System.Windows.Forms.Form

    'Form reemplaza a Dispose para limpiar la lista de componentes.
    <System.Diagnostics.DebuggerNonUserCode()>
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Requerido por el Diseñador de Windows Forms
    Private components As System.ComponentModel.IContainer

    'NOTA: el Diseñador de Windows Forms necesita el siguiente procedimiento
    'Se puede modificar usando el Diseñador de Windows Forms.  
    'No lo modifique con el editor de código.
    <System.Diagnostics.DebuggerStepThrough()>
    Private Sub InitializeComponent()
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(ReportDetails))
        Me.imgNosbey = New System.Windows.Forms.Button()
        Me.btnPrevious = New System.Windows.Forms.Button()
        Me.btnCloseApp = New System.Windows.Forms.Button()
        Me.lblPublicationName = New System.Windows.Forms.Label()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.lvReports = New System.Windows.Forms.ListView()
        Me.lvIdUser = CType(New System.Windows.Forms.ColumnHeader(), System.Windows.Forms.ColumnHeader)
        Me.lvDescription = CType(New System.Windows.Forms.ColumnHeader(), System.Windows.Forms.ColumnHeader)
        Me.btnLayOff = New System.Windows.Forms.Button()
        Me.btnDisregard = New System.Windows.Forms.Button()
        Me.btnDelete = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'imgNosbey
        '
        Me.imgNosbey.BackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.BackgroundImage = CType(resources.GetObject("imgNosbey.BackgroundImage"), System.Drawing.Image)
        Me.imgNosbey.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.imgNosbey.Enabled = False
        Me.imgNosbey.FlatAppearance.BorderColor = System.Drawing.Color.FromArgb(CType(CType(48, Byte), Integer), CType(CType(54, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.imgNosbey.FlatAppearance.BorderSize = 0
        Me.imgNosbey.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.imgNosbey.Location = New System.Drawing.Point(586, 5)
        Me.imgNosbey.Name = "imgNosbey"
        Me.imgNosbey.Size = New System.Drawing.Size(195, 160)
        Me.imgNosbey.TabIndex = 39
        Me.imgNosbey.UseVisualStyleBackColor = False
        '
        'btnPrevious
        '
        Me.btnPrevious.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.btnPrevious.BackgroundImage = CType(resources.GetObject("btnPrevious.BackgroundImage"), System.Drawing.Image)
        Me.btnPrevious.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnPrevious.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnPrevious.FlatAppearance.BorderSize = 0
        Me.btnPrevious.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnPrevious.Location = New System.Drawing.Point(1270, 15)
        Me.btnPrevious.Name = "btnPrevious"
        Me.btnPrevious.Size = New System.Drawing.Size(37, 40)
        Me.btnPrevious.TabIndex = 43
        Me.btnPrevious.UseVisualStyleBackColor = False
        '
        'btnCloseApp
        '
        Me.btnCloseApp.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.btnCloseApp.BackgroundImage = CType(resources.GetObject("btnCloseApp.BackgroundImage"), System.Drawing.Image)
        Me.btnCloseApp.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnCloseApp.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnCloseApp.FlatAppearance.BorderSize = 0
        Me.btnCloseApp.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnCloseApp.Location = New System.Drawing.Point(1310, 15)
        Me.btnCloseApp.Name = "btnCloseApp"
        Me.btnCloseApp.Size = New System.Drawing.Size(42, 40)
        Me.btnCloseApp.TabIndex = 42
        Me.btnCloseApp.UseVisualStyleBackColor = False
        '
        'lblPublicationName
        '
        Me.lblPublicationName.AutoSize = True
        Me.lblPublicationName.Font = New System.Drawing.Font("Microsoft Sans Serif", 11.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblPublicationName.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.lblPublicationName.Location = New System.Drawing.Point(683, 220)
        Me.lblPublicationName.Name = "lblPublicationName"
        Me.lblPublicationName.Size = New System.Drawing.Size(0, 18)
        Me.lblPublicationName.TabIndex = 45
        Me.lblPublicationName.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Font = New System.Drawing.Font("Microsoft Sans Serif", 18.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label1.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.Label1.Location = New System.Drawing.Point(540, 180)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(287, 29)
        Me.Label1.TabIndex = 48
        Me.Label1.Text = "Detalles de la denuncia"
        '
        'lvReports
        '
        Me.lvReports.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.lvReports.Columns.AddRange(New System.Windows.Forms.ColumnHeader() {Me.lvIdUser, Me.lvDescription})
        Me.lvReports.Font = New System.Drawing.Font("Microsoft Sans Serif", 12.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lvReports.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.lvReports.Location = New System.Drawing.Point(213, 250)
        Me.lvReports.Name = "lvReports"
        Me.lvReports.Size = New System.Drawing.Size(940, 455)
        Me.lvReports.TabIndex = 49
        Me.lvReports.UseCompatibleStateImageBehavior = False
        Me.lvReports.View = System.Windows.Forms.View.Details
        '
        'lvIdUser
        '
        Me.lvIdUser.Text = "ID usuario"
        Me.lvIdUser.Width = 106
        '
        'lvDescription
        '
        Me.lvDescription.Text = "Descripción"
        Me.lvDescription.Width = 525
        '
        'btnLayOff
        '
        Me.btnLayOff.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.btnLayOff.BackgroundImage = CType(resources.GetObject("btnLayOff.BackgroundImage"), System.Drawing.Image)
        Me.btnLayOff.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnLayOff.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnLayOff.FlatAppearance.BorderColor = System.Drawing.SystemColors.ScrollBar
        Me.btnLayOff.FlatAppearance.BorderSize = 0
        Me.btnLayOff.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnLayOff.Location = New System.Drawing.Point(1055, 210)
        Me.btnLayOff.Name = "btnLayOff"
        Me.btnLayOff.Size = New System.Drawing.Size(25, 32)
        Me.btnLayOff.TabIndex = 50
        Me.btnLayOff.UseVisualStyleBackColor = False
        '
        'btnDisregard
        '
        Me.btnDisregard.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.btnDisregard.BackgroundImage = CType(resources.GetObject("btnDisregard.BackgroundImage"), System.Drawing.Image)
        Me.btnDisregard.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnDisregard.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnDisregard.FlatAppearance.BorderColor = System.Drawing.SystemColors.ScrollBar
        Me.btnDisregard.FlatAppearance.BorderSize = 0
        Me.btnDisregard.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnDisregard.Location = New System.Drawing.Point(1090, 210)
        Me.btnDisregard.Name = "btnDisregard"
        Me.btnDisregard.Size = New System.Drawing.Size(25, 32)
        Me.btnDisregard.TabIndex = 52
        Me.btnDisregard.UseVisualStyleBackColor = False
        '
        'btnDelete
        '
        Me.btnDelete.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.btnDelete.BackgroundImage = CType(resources.GetObject("btnDelete.BackgroundImage"), System.Drawing.Image)
        Me.btnDelete.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnDelete.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnDelete.FlatAppearance.BorderColor = System.Drawing.SystemColors.ScrollBar
        Me.btnDelete.FlatAppearance.BorderSize = 0
        Me.btnDelete.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnDelete.ForeColor = System.Drawing.Color.Transparent
        Me.btnDelete.Location = New System.Drawing.Point(1125, 210)
        Me.btnDelete.Name = "btnDelete"
        Me.btnDelete.Size = New System.Drawing.Size(25, 32)
        Me.btnDelete.TabIndex = 51
        Me.btnDelete.UseVisualStyleBackColor = False
        '
        'ReportDetails
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.ClientSize = New System.Drawing.Size(1366, 768)
        Me.Controls.Add(Me.btnLayOff)
        Me.Controls.Add(Me.btnDisregard)
        Me.Controls.Add(Me.btnDelete)
        Me.Controls.Add(Me.lvReports)
        Me.Controls.Add(Me.Label1)
        Me.Controls.Add(Me.lblPublicationName)
        Me.Controls.Add(Me.btnPrevious)
        Me.Controls.Add(Me.btnCloseApp)
        Me.Controls.Add(Me.imgNosbey)
        Me.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None
        Me.Name = "ReportDetails"
        Me.Text = "ReportDetails"
        Me.WindowState = System.Windows.Forms.FormWindowState.Maximized
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents imgNosbey As Button
    Friend WithEvents btnPrevious As Button
    Friend WithEvents btnCloseApp As Button
    Friend WithEvents lblPublicationName As Label
    Friend WithEvents Label1 As Label
    Friend WithEvents lvReports As ListView
    Friend WithEvents lvIdUser As ColumnHeader
    Friend WithEvents lvDescription As ColumnHeader
    Friend WithEvents btnLayOff As Button
    Friend WithEvents btnDisregard As Button
    Friend WithEvents btnDelete As Button
End Class
