<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Partial Class MainScreen
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
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(MainScreen))
        Me.btnCloseApp = New System.Windows.Forms.Button()
        Me.containerMain = New System.Windows.Forms.Panel()
        Me.separator = New System.Windows.Forms.Panel()
        Me.btnCategory = New System.Windows.Forms.Button()
        Me.btnSignIn = New System.Windows.Forms.Button()
        Me.lblLogIn = New System.Windows.Forms.Label()
        Me.imgNosbey = New System.Windows.Forms.Button()
        Me.containerMain.SuspendLayout()
        Me.SuspendLayout()
        '
        'btnCloseApp
        '
        Me.btnCloseApp.BackColor = System.Drawing.Color.Transparent
        Me.btnCloseApp.BackgroundImage = CType(resources.GetObject("btnCloseApp.BackgroundImage"), System.Drawing.Image)
        Me.btnCloseApp.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnCloseApp.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnCloseApp.FlatAppearance.BorderSize = 0
        Me.btnCloseApp.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnCloseApp.Location = New System.Drawing.Point(1310, 15)
        Me.btnCloseApp.Name = "btnCloseApp"
        Me.btnCloseApp.Size = New System.Drawing.Size(42, 40)
        Me.btnCloseApp.TabIndex = 32
        Me.btnCloseApp.UseVisualStyleBackColor = False
        '
        'containerMain
        '
        Me.containerMain.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.containerMain.Controls.Add(Me.lblLogIn)
        Me.containerMain.Controls.Add(Me.btnSignIn)
        Me.containerMain.Controls.Add(Me.btnCategory)
        Me.containerMain.Controls.Add(Me.separator)
        Me.containerMain.Location = New System.Drawing.Point(384, 175)
        Me.containerMain.Name = "containerMain"
        Me.containerMain.RightToLeft = System.Windows.Forms.RightToLeft.No
        Me.containerMain.Size = New System.Drawing.Size(599, 460)
        Me.containerMain.TabIndex = 7
        '
        'separator
        '
        Me.separator.BackColor = System.Drawing.SystemColors.ButtonHighlight
        Me.separator.Location = New System.Drawing.Point(300, 95)
        Me.separator.Name = "separator"
        Me.separator.Size = New System.Drawing.Size(3, 335)
        Me.separator.TabIndex = 2
        '
        'btnCategory
        '
        Me.btnCategory.BackgroundImage = CType(resources.GetObject("btnCategory.BackgroundImage"), System.Drawing.Image)
        Me.btnCategory.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnCategory.FlatAppearance.BorderSize = 0
        Me.btnCategory.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnCategory.Font = New System.Drawing.Font("Berlin Sans FB Demi", 12.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnCategory.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.btnCategory.Location = New System.Drawing.Point(75, 170)
        Me.btnCategory.Name = "btnCategory"
        Me.btnCategory.Size = New System.Drawing.Size(185, 170)
        Me.btnCategory.TabIndex = 3
        Me.btnCategory.Text = "Categorías"
        Me.btnCategory.TextAlign = System.Drawing.ContentAlignment.BottomCenter
        Me.btnCategory.UseVisualStyleBackColor = True
        '
        'btnSignIn
        '
        Me.btnSignIn.BackgroundImage = CType(resources.GetObject("btnSignIn.BackgroundImage"), System.Drawing.Image)
        Me.btnSignIn.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnSignIn.FlatAppearance.BorderSize = 0
        Me.btnSignIn.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnSignIn.Font = New System.Drawing.Font("Berlin Sans FB Demi", 12.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnSignIn.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.btnSignIn.Location = New System.Drawing.Point(340, 170)
        Me.btnSignIn.Name = "btnSignIn"
        Me.btnSignIn.Size = New System.Drawing.Size(185, 170)
        Me.btnSignIn.TabIndex = 4
        Me.btnSignIn.Text = "Productos denunciados"
        Me.btnSignIn.TextAlign = System.Drawing.ContentAlignment.BottomCenter
        Me.btnSignIn.UseVisualStyleBackColor = True
        '
        'lblLogIn
        '
        Me.lblLogIn.AutoSize = True
        Me.lblLogIn.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.lblLogIn.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.lblLogIn.Font = New System.Drawing.Font("Berlin Sans FB", 18.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblLogIn.ForeColor = System.Drawing.SystemColors.ControlLightLight
        Me.lblLogIn.Location = New System.Drawing.Point(250, 40)
        Me.lblLogIn.Name = "lblLogIn"
        Me.lblLogIn.Size = New System.Drawing.Size(104, 26)
        Me.lblLogIn.TabIndex = 5
        Me.lblLogIn.Text = "Modificar"
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
        Me.imgNosbey.TabIndex = 33
        Me.imgNosbey.UseVisualStyleBackColor = False
        '
        'MainScreen
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.ClientSize = New System.Drawing.Size(1366, 768)
        Me.Controls.Add(Me.imgNosbey)
        Me.Controls.Add(Me.containerMain)
        Me.Controls.Add(Me.btnCloseApp)
        Me.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None
        Me.Name = "MainScreen"
        Me.Text = "MainScreen"
        Me.WindowState = System.Windows.Forms.FormWindowState.Maximized
        Me.containerMain.ResumeLayout(False)
        Me.containerMain.PerformLayout()
        Me.ResumeLayout(False)

    End Sub
    Friend WithEvents btnCloseApp As Button
    Friend WithEvents containerMain As Panel
    Friend WithEvents lblLogIn As Label
    Friend WithEvents btnSignIn As Button
    Friend WithEvents btnCategory As Button
    Friend WithEvents separator As Panel
    Friend WithEvents imgNosbey As Button
End Class
